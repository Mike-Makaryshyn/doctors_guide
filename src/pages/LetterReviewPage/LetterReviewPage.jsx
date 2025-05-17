import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import styles from './LetterReviewPage.module.css';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import { FaExclamationCircle } from 'react-icons/fa';

const LetterReviewPage = () => {
  const { caseId: routeCaseId } = useParams();
  const location = useLocation();
  const initialParsed = location.state?.parsedData || {};
  const hasParsedData = Object.keys(initialParsed).length > 0;
  const fullNameDisplay = initialParsed.fullName && initialParsed.surname
    ? `${initialParsed.fullName} ${initialParsed.surname}`
    : initialParsed.fullName || initialParsed.surname || '';

  // 3. Brief-Inhalte
  const [letter, setLetter] = useState({
    patientAndDate: initialParsed.patientAndDate || '',
    anamnesis: initialParsed.anamnesis || '',
    preexistingConditions: initialParsed.preexistingConditions || '',
    medications: initialParsed.medications || '',
    consumables: initialParsed.consumables || '',
    socialHistory: initialParsed.socialHistory || '',
    familyHistory: initialParsed.familyHistory || '',
    differentialDiagnosis: initialParsed.differentialDiagnosis || '',
    furtherProcedure: initialParsed.furtherProcedure || '',
    therapy: initialParsed.therapy || ''
  });
  const [options, setOptions] = useState({
    compareWithTemplate: true,
    grammarStyleOnly: false
  });
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tokenCount, setTokenCount] = useState(0);
  const [costUsd, setCostUsd] = useState(0);
  // Debug toggle to inspect prompt data
  const [showDebug, setShowDebug] = useState(false);

  // Available feedback languages
  const responseLanguages = [
    'Deutsch', 'Englisch', 'Українська', 'Русский', 'Türkçe',
    'العربية', 'Français', 'Español', 'Polski', 'Ελληνικά', 'Română'
  ];
  const [responseLang, setResponseLang] = useState('Deutsch');

  // Notices for when no letter fields are filled
  const emptyNotices = {
    Deutsch: 'Keine Felder ausgefüllt. Bitte mindestens ein Feld ausfüllen.',
    Englisch: 'No fields filled. Please fill in at least one field.',
    Українська: 'Немає заповнених полів. Будь ласка, заповніть хоча б одне поле.',
    Русский: 'Нет заполненных полей. Пожалуйста, заполните хотя бы одно поле.',
    Türkçe: 'Hiç alan doldurulmadı. Lütfen en az bir alan doldurun.',
    العربية: 'لم يتم ملء أي حقول. الرجاء ملء حقل واحد على الأقل.',
    Français: 'Aucun champ rempli. Veuillez remplir au moins un champ.',
    Español: 'No se han rellenado campos. Por favor, complete al menos un campo.',
    Polski: 'Nie wypełniono żadnych pól. Proszę wypełnić przynajmniej jedno pole.',
    Ελληνικά: 'Δεν συμπληρώθηκε κανένα πεδίο. Παρακαλώ συμπληρώστε τουλάχιστον ένα πεδίο.',
    Română: 'Niciun câmp completat. Vă rugăm să completaţi cel puţin un câmp.'
  };

  // 4. Helfer: alle geparsten Felder (initialParsed), entferne leere Strings/Null/Undefined
  const buildPromptData = () => {
    // Nehme alle geparsten Daten, entferne leere Strings/Null/Undefined
    const filtered = Object.entries(initialParsed)
      .filter(([k, v]) =>
        k !== 'patientQuestions' &&
        k !== 'examinerQuestions' &&
        k !== 'id' &&
        k !== 'examDate' &&
        v !== null &&
        v !== undefined &&
        !(typeof v === 'string' && v.trim() === '')
      )
      .reduce((acc, [k, v]) => ({ ...acc, [k]: typeof v === 'string' ? v.trim() : v }), {});
    return {
      userLetter: filtered
    };
  };

  // Build primary payload
  const payload = buildPromptData();

  // Messages when parsed data exists
  const messages = [
    {
      role: 'system',
      content: [
        'Du erhältst nun die vollständigen Falldaten, auf deren Grundlage der Arztbrief erstellt wurde.',
        'Nutze diese Informationen nur als Kontext und wiederhole sie nicht.'
      ].join(' ') + `\n\nDaten:\n${JSON.stringify(payload, null, 2)}`
    },
    {
      role: 'system',
      content: [
        `Antworte ausschließlich auf ${responseLang}.`,
        'Du bist ein erfahrener Prüfer und bewertest nun den eingereichten Arztbrief.',
        `• Wenn der Brief leer ist ({}), antworte nur: "${emptyNotices[responseLang] || emptyNotices.Deutsch}"`,
        '• Ansonsten bewerte:',
        '  1. Fachkorrektheit in natürlicher Sprache (keine Feldnamen nennen).',
        '  2. Grammatikfehler auflisten und Korrekturen vorschlagen.',
        '  3. Stil & Lesbarkeit kurz einschätzen.',
        '  4. Gesamtbewertung: "Dieser Brief würde in der Prüfung voraussichtlich bestanden/nicht bestanden werden", mit kurzer Begründung.'
      ].join(' ')
    },
    {
      role: 'user',
      content: JSON.stringify(letter, null, 2)
    }
  ];

  // Fallback messages when no parsed data
  const fallbackMessages = [
    {
      role: 'system',
      content: emptyNotices[responseLang] || emptyNotices.Deutsch
    },
    { role: 'user', content: JSON.stringify(letter) }
  ];

  // Choose which set to debug or send
  const debugMessages = hasParsedData ? messages : fallbackMessages;

  // 5. Review-Handler
  const handleReview = async () => {
    setLoading(true);
    const payload = buildPromptData();
    // If no userLetter fields provided, skip API call and show notice
    if (!payload.userLetter || Object.keys(payload.userLetter).length === 0) {
      setLoading(false);
      setFeedback({ notice: emptyNotices[responseLang] || emptyNotices.Deutsch });
      return;
    }
    const toSend = hasParsedData ? messages : fallbackMessages;
    console.log('Sending to GPT:', toSend);
    const { data, error } = await supabase.functions.invoke('openai-proxy', {
      body: {
        model: 'gpt-4',
        temperature: 0,
        messages: toSend
      }
    });
    // Token & Kosten
    if (data?.usage?.total_tokens) {
      setTokenCount(c => c + data.usage.total_tokens);
      setCostUsd(c => c + (data.usage.total_tokens / 1000) * 0.002);
    }
    setLoading(false);
    if (error) {
      console.error(error);
      return;
    }
    // Feedback parsen
    let parsed;
    try { parsed = JSON.parse(data.choices[0].message.content); }
    catch { parsed = { raw: data.choices[0].message.content }; }
    setFeedback(parsed);
  };

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <h1>
          {hasParsedData && (
            <FaExclamationCircle
              title="Parsed data present"
              style={{ color: 'orange', marginRight: '8px', cursor: 'pointer' }}
              onClick={() => setShowDebug(d => !d)}
            />
          )}
          {fullNameDisplay
            ? `Arzt-Brief Review – ${fullNameDisplay}`
            : routeCaseId
            ? `Arzt-Brief Review – Fall ${routeCaseId}`
            : 'Arzt-Brief Review'}
        </h1>

        {showDebug && (
          <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '12px', margin: '12px 0' }}>
            <h2 style={{ margin: '0 0 8px' }}>Debug Prompt</h2>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontSize: '0.9em' }}>
              {JSON.stringify(debugMessages, null, 2)}
            </pre>
          </div>
        )}

        <div className={styles.counters}>
          <span>Tokens: {tokenCount}</span>
          <span>Kosten: €{costUsd.toFixed(4)}</span>
        </div>

        <form className={styles.form} onSubmit={e => { e.preventDefault(); handleReview(); }}>
          {/* Text-Felder */}
          {[
            { label: 'Patient', key: 'patientAndDate' },
            { label: 'Aktuelle Beschwerden', key: 'anamnesis' },
            { label: 'Vorerkrankungen', key: 'preexistingConditions' },
            { label: 'Medikamente', key: 'medications' },
            { label: 'Genussmittel', key: 'consumables' },
            { label: 'Sozialanamnese', key: 'socialHistory' },
            { label: 'Familiäre Anamnese', key: 'familyHistory' },
            { label: 'Differentialdiagnose', key: 'differentialDiagnosis' },
            { label: 'Weiteres Procedere', key: 'furtherProcedure' },
            { label: 'Therapie', key: 'therapy' }
          ].map(({ label, key }) => (
            <div key={key} className={styles.field}>
              <label>{label}</label>
              {key === 'patientAndDate' ? (
                <input
                  type="text"
                  value={letter[key]}
                  onChange={e => setLetter(l => ({ ...l, [key]: e.target.value }))}
                />
              ) : (
                <textarea
                  rows={3}
                  value={letter[key]}
                  onChange={e => setLetter(l => ({ ...l, [key]: e.target.value }))}
                />
              )}
            </div>
          ))}

          {/* Vergleichs-Optionen */}
          <div className={styles.options}>
            <label>
              <input
                type="checkbox"
                checked={options.compareWithTemplate}
                onChange={e => setOptions(o => ({ ...o, compareWithTemplate: e.target.checked }))}
              />
              Mit Vorlage vergleichen
            </label>
            <label>
              <input
                type="checkbox"
                checked={options.grammarStyleOnly}
                onChange={e => setOptions(o => ({ ...o, grammarStyleOnly: e.target.checked }))}
                disabled={!options.compareWithTemplate}
              />
              Nur Grammatik/Stil
            </label>
          </div>

          {/* Vergleichsvorlage */}
          {options.compareWithTemplate && (
            <div className={styles.field}>
              <label>Vergleichsvorlage</label>
              <select value={''} onChange={() => {}}>
                <option value="">Keine Auswahl möglich</option>
              </select>
            </div>
          )}

          <div className={styles.field}>
            <label>Antwortsprache</label>
            <select
              value={responseLang}
              onChange={e => setResponseLang(e.target.value)}
            >
              {responseLanguages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? 'Prüfe…' : 'Brief prüfen'}
          </button>
        </form>

        {/* Feedback */}
        {feedback && (
          <div className={styles.feedback}>
            {feedback.notice && <p className={styles.notice}>{feedback.notice}</p>}
            {feedback.similarityScore != null &&
              <p>Ähnlichkeit: {(feedback.similarityScore * 100).toFixed(1)} %</p>
            }
            {feedback.missingSections?.length > 0 &&
              <p>Fehlende Abschnitte: {feedback.missingSections.join(', ')}</p>
            }
            {feedback.grammarErrors?.length > 0 && (
              <section>
                <h3>Grammatik</h3>
                <ul>
                  {feedback.grammarErrors.map((e,i) =>
                    <li key={i}>{e.section}: {e.message}</li>
                  )}
                </ul>
              </section>
            )}
            {feedback.styleSuggestions?.length > 0 && (
              <section>
                <h3>Stil</h3>
                <ul>
                  {feedback.styleSuggestions.map((s,i) =>
                    <li key={i}>{s.section}: {s.suggestion}</li>
                  )}
                </ul>
              </section>
            )}
            {feedback.raw && (
              <section>
                <h3>Rohantwort</h3>
                <pre>{feedback.raw}</pre>
              </section>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default LetterReviewPage;