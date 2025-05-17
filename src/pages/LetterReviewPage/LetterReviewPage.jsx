import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import styles from './LetterReviewPage.module.css';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import { FaExclamationCircle, FaInfoCircle, FaCog } from 'react-icons/fa';

const LetterReviewPage = () => {
  const { caseId: routeCaseId } = useParams();
  const location = useLocation();
  const initialParsed = location.state?.parsedData || {};
  const hasParsedData = Object.keys(initialParsed).length > 0;
  const fullNameDisplay = initialParsed.fullName && initialParsed.surname
    ? `${initialParsed.fullName} ${initialParsed.surname}`
    : initialParsed.fullName || initialParsed.surname || '';

  // Anamnese template
  const anamnesisTemplate =
    'aktuelle Beschwerden:\n\n\n\n\n\n\n' +  // six blank lines after heading
    'Vorerkrankungen:\n\n\n' +              // two blank lines
    'OP:\n\n\n' +                          // two blank lines
    'Medikamente:\n\n\n';                  // two blank lines

  // Allergies template
  const allergiesTemplate =
    'Allergien:\n' +
    'Unverträglichkeiten:';

  // Consumables template
  const consumablesTemplate =
    'Nikotin-Abusus:\n' +
    'Alkohol-Abusus:\n' +
    'Drogen-Abusus:';

  // 3. Brief-Inhalte
  const [letter, setLetter] = useState({
    patientAndDate: initialParsed.patientAndDate || '',
    anamnesis: initialParsed.anamnesis || anamnesisTemplate,
    allergies: initialParsed.allergies || '',
    preexistingConditions: initialParsed.preexistingConditions || '',
    medications: initialParsed.medications || '',
    consumables: initialParsed.consumables || '',
    socialHistory: initialParsed.socialHistory || '',
    familyHistory: initialParsed.familyHistory || '',
    suspectedDiagnosis: '',
    differentialDiagnosis: initialParsed.differentialDiagnosis || '',
    furtherProcedure: initialParsed.furtherProcedure || '',
    therapy: initialParsed.therapy || ''
  });

  const [patientRows, setPatientRows] = useState(2);
  const [allergiesRows, setAllergiesRows] = useState(2);
  const [consumablesRows, setConsumablesRows] = useState(2);
  const [socialHistoryRows, setSocialHistoryRows] = useState(2);
  const [familyHistoryRows, setFamilyHistoryRows] = useState(2);

  // Rows and template for Vermutete Diagnose
  const [suspectedDiagnosisRows, setSuspectedDiagnosisRows] = useState(2);
  const suspectedDiagnosisTemplate =
    'Vermutete Diagnose:\n' +
    'Begründung:';
  const insertSuspectedDiagnosisTemplate = () => {
    setLetter(prev => ({
      ...prev,
      suspectedDiagnosis: prev.suspectedDiagnosis
        ? prev.suspectedDiagnosis + '\n' + suspectedDiagnosisTemplate
        : suspectedDiagnosisTemplate
    }));
    setSuspectedDiagnosisRows(prevRows => prevRows + suspectedDiagnosisTemplate.split('\n').length);
  };

  // Insert placeholder template into Patient field
  const insertPatientTemplate = () => {
    setLetter(prev => ({
      ...prev,
      patientAndDate: prev.patientAndDate
        ? prev.patientAndDate + '\n' + [
            'Vorname: ',
            'Nachname: ',
            'Geburtsdatum: ',
            'Alter: ',
            'Gewicht: ',
            'Größe: ',
            'Hausarzt: '
          ].join('\n')
        : [
            'Vorname: ',
            'Nachname: ',
            'Geburtsdatum: ',
            'Alter: ',
            'Gewicht: ',
            'Größe: ',
            'Hausarzt: '
          ].join('\n')
    }));
  };

  const insertAllergiesTemplate = () => {
    setLetter(prev => ({
      ...prev,
      allergies: prev.allergies
        ? prev.allergies + '\n' + allergiesTemplate
        : allergiesTemplate
    }));
    setAllergiesRows(prevRows => prevRows + allergiesTemplate.split('\n').length);
  };

  const insertConsumablesTemplate = () => {
    setLetter(prev => ({
      ...prev,
      consumables: prev.consumables
        ? prev.consumables + '\n' + consumablesTemplate
        : consumablesTemplate
    }));
    setConsumablesRows(prevRows => prevRows + consumablesTemplate.split('\n').length);
  };

  const insertDifferentialTemplate = () => {
    setLetter(prev => ({
      ...prev,
      differentialDiagnosis: prev.differentialDiagnosis
        ? prev.differentialDiagnosis + '\n' + [
            'Differentiale Diagnosen:',
            'Abgrenzung:'
          ].join('\n')
        : [
            'Differentiale Diagnosen:',
            'Abgrenzung:'
          ].join('\n')
    }));
  };

  const insertProceduresTemplate = () => {
    setLetter(prev => ({
      ...prev,
      furtherProcedure: prev.furtherProcedure
        ? prev.furtherProcedure + '\n' + [
            'Körperliche Untersuchung:',
            'Laboruntersuchung:',
            'Apparative Untersuchung:'
          ].join('\n')
        : [
            'Körperliche Untersuchung:',
            'Laboruntersuchung:',
            'Apparative Untersuchung:'
          ].join('\n')
    }));
  };

  // Therapy template
  const therapyTemplate =
    'Therapie:\n' +
    '• ';
  const insertTherapyTemplate = () => {
    setLetter(prev => ({
      ...prev,
      therapy: prev.therapy
        ? prev.therapy + '\nTherapie:\n• '
        : 'Therapie:\n• '
    }));
  };

  // Social History template
  const socialHistoryTemplate =
    'Beruf:\n' +
    'Familienstand:\n' +
    'Kinder:\n' +
    'Wohnsituation:\n' +
    'Psychosomatische Anamnese/Stress:\n' +
    'Körperliche Aktivität:\n' +
    'Ernährungsgewohnheiten:';

  // Family History template
  const familyHistoryTemplate =
    'Familiäre Erkrankungen:\n' +
    'Genetische Erkrankungen:\n' +
    'Eltern:\n' +
    'Geschwister:';

  // Insert templates for Social History and Family History
  const insertSocialHistoryTemplate = () => {
    setLetter(prev => ({
      ...prev,
      socialHistory: prev.socialHistory
        ? prev.socialHistory + '\n' + socialHistoryTemplate
        : socialHistoryTemplate
    }));
    setSocialHistoryRows(prevRows => prevRows + socialHistoryTemplate.split('\n').length);
  };
  const insertFamilyHistoryTemplate = () => {
    setLetter(prev => ({
      ...prev,
      familyHistory: prev.familyHistory
        ? prev.familyHistory + '\n' + familyHistoryTemplate
        : familyHistoryTemplate
    }));
    setFamilyHistoryRows(prevRows => prevRows + familyHistoryTemplate.split('\n').length);
  };

  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tokenCount, setTokenCount] = useState(0);
  const [costUsd, setCostUsd] = useState(0);
  // Debug toggle to inspect prompt data
  const [showDebug, setShowDebug] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

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
            { label: 'Anamnese', key: 'anamnesis' },
            { label: 'Allergien', key: 'allergies' },
            { label: 'Genussmittel', key: 'consumables' },
            { label: 'Sozialanamnese', key: 'socialHistory' },
            { label: 'Familiäre Anamnese', key: 'familyHistory' },
            { label: 'Diagnose', key: 'suspectedDiagnosis' },
            { label: 'Differentialdiagnose', key: 'differentialDiagnosis' },
            { label: 'Weiteres Procedere', key: 'furtherProcedure' },
            { label: 'Therapie', key: 'therapy' }
          ].map(({ label, key }) => (
            <div key={key} className={styles.field}>
              <label>{label}</label>
              {label === 'Patient' ? (
                <div style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
                  <textarea
                    rows={patientRows}
                    style={{ width: '100%', paddingRight: '32px', boxSizing: 'border-box', overflow: 'hidden' }}
                    value={letter[key]}
                    onChange={e => {
                      const val = e.target.value;
                      setLetter(l => ({ ...l, [key]: val }));
                      const lines = val.split('\n').length;
                      setPatientRows(Math.max(lines, 2));
                    }}
                  />
                  <FaInfoCircle
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      cursor: 'pointer',
                      zIndex: 10,
                      color: '#333'
                    }}
                    title="Vorlage einfügen"
                    onClick={() => {
                      insertPatientTemplate();
                      setPatientRows(7);
                    }}
                  />
                </div>
              ) : label === 'Anamnese' ? (
                <textarea
                  rows={18}
                  style={{ width: '100%' }}
                  value={letter[key]}
                  onChange={e => setLetter(l => ({ ...l, [key]: e.target.value }))}
                />
              ) : label === 'Allergien' ? (
                <div style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
                  <textarea
                    rows={allergiesRows}
                    style={{ width: '100%', paddingRight: '32px', boxSizing: 'border-box', overflow: 'hidden' }}
                    value={letter[key]}
                    onChange={e => {
                      const lines = e.target.value.split('\n').length;
                      setAllergiesRows(lines);
                      setLetter(l => ({ ...l, [key]: e.target.value }));
                    }}
                  />
                  <FaInfoCircle
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      cursor: 'pointer',
                      zIndex: 10,
                      color: '#333'
                    }}
                    title="Vorlage einfügen"
                    onClick={() => {
                      insertAllergiesTemplate();
                    }}
                  />
                </div>
              ) : label === 'Genussmittel' ? (
                <div style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
                  <textarea
                    rows={consumablesRows}
                    style={{ width: '100%', paddingRight: '32px', boxSizing: 'border-box', overflow: 'hidden' }}
                    value={letter[key]}
                    onChange={e => {
                      const lines = e.target.value.split('\n').length;
                      setConsumablesRows(lines);
                      setLetter(l => ({ ...l, [key]: e.target.value }));
                    }}
                  />
                  <FaInfoCircle
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      cursor: 'pointer',
                      zIndex: 10,
                      color: '#333'
                    }}
                    title="Vorlage einfügen"
                    onClick={() => {
                      insertConsumablesTemplate();
                    }}
                  />
                </div>
              ) : label === 'Sozialanamnese' ? (
                <div style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
                  <textarea
                    rows={socialHistoryRows}
                    style={{ width: '100%', paddingRight: '32px', boxSizing: 'border-box', overflow: 'hidden' }}
                    value={letter.socialHistory}
                    onChange={e => {
                      const lines = e.target.value.split('\n').length;
                      setSocialHistoryRows(lines);
                      setLetter(l => ({ ...l, socialHistory: e.target.value }));
                    }}
                  />
                  <FaInfoCircle
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      cursor: 'pointer',
                      zIndex: 10,
                      color: '#333'
                    }}
                    title="Vorlage einfügen"
                    onClick={insertSocialHistoryTemplate}
                  />
                </div>
              ) : label === 'Familiäre Anamnese' ? (
                <div style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
                  <textarea
                    rows={familyHistoryRows}
                    style={{ width: '100%', paddingRight: '32px', boxSizing: 'border-box', overflow: 'hidden' }}
                    value={letter.familyHistory}
                    onChange={e => {
                      const lines = e.target.value.split('\n').length;
                      setFamilyHistoryRows(lines);
                      setLetter(l => ({ ...l, familyHistory: e.target.value }));
                    }}
                  />
                  <FaInfoCircle
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      cursor: 'pointer',
                      zIndex: 10,
                      color: '#333'
                    }}
                    title="Vorlage einfügen"
                    onClick={insertFamilyHistoryTemplate}
                  />
                </div>
              ) : label === 'Differentialdiagnose' ? (
                <div style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
                  <textarea
                    rows={3}
                    style={{ width: '100%', paddingRight: '32px', boxSizing: 'border-box' }}
                    value={letter[key]}
                    onChange={e => setLetter(l => ({ ...l, [key]: e.target.value }))}
                  />
                  <FaInfoCircle
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      cursor: 'pointer',
                      zIndex: 10,
                      color: '#333'
                    }}
                    title="Vorlage einfügen"
                    onClick={() => insertDifferentialTemplate()}
                  />
                </div>
              ) : label === 'Weiteres Procedere' ? (
                <div style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
                  <textarea
                    rows={4}
                    style={{ width: '100%', paddingRight: '32px', boxSizing: 'border-box' }}
                    value={letter[key]}
                    onChange={e => setLetter(l => ({ ...l, [key]: e.target.value }))}
                  />
                  <FaInfoCircle
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      cursor: 'pointer',
                      zIndex: 10,
                      color: '#333'
                    }}
                    title="Vorlage einfügen"
                    onClick={() => insertProceduresTemplate()}
                  />
                </div>
              ) : label === 'Diagnose' ? (
                <div style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
                  <textarea
                    rows={suspectedDiagnosisRows}
                    style={{ width: '100%', paddingRight: '32px', boxSizing: 'border-box' }}
                    value={letter.suspectedDiagnosis}
                    onChange={e => {
                      const val = e.target.value;
                      setLetter(l => ({ ...l, suspectedDiagnosis: val }));
                      setSuspectedDiagnosisRows(val.split('\n').length);
                    }}
                  />
                  <FaInfoCircle
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      cursor: 'pointer',
                      zIndex: 10,
                      color: '#333'
                    }}
                    title="Vorlage einfügen"
                    onClick={insertSuspectedDiagnosisTemplate}
                  />
                </div>
              ) : label === 'Therapie' ? (
                <div style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
                  <textarea
                    rows={3}
                    style={{ width: '100%', paddingRight: '32px', boxSizing: 'border-box' }}
                    value={letter.therapy}
                    onChange={e => setLetter(l => ({ ...l, therapy: e.target.value }))}
                  />
                  <FaInfoCircle
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      cursor: 'pointer',
                      zIndex: 10,
                      color: '#333'
                    }}
                    title="Vorlage einfügen"
                    onClick={insertTherapyTemplate}
                  />
                </div>
              ) : (
                <textarea
                  rows={3}
                  style={{ width: '100%' }}
                  value={letter[key]}
                  onChange={e => setLetter(l => ({ ...l, [key]: e.target.value }))}
                />
              )}
            </div>
          ))}



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

        </form>
        <div className={styles.reviewButtonContainer}>
          <button
            type="button"
            className={styles.reviewButton}
            onClick={handleReview}
            disabled={loading}
          >
            <FaCog className={loading ? styles.spin : ''} />
          </button>
        </div>

        {/* Feedback toggle icon */}
        {feedback && (
          <FaInfoCircle
            className={styles.feedbackToggleIcon}
            title="Feedback anzeigen"
            onClick={() => setShowPopover(prev => !prev)}
          />
        )}
        {/* Popover window */}
        {feedback && showPopover && (
          <div className={styles.feedbackPopover}>
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