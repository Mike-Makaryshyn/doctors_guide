import React, { useState, useContext, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import styles from './LetterReviewPage.module.css';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import { DataSourceContext } from '../../contexts/DataSourceContext';
import useGetGlobalInfo from '../../hooks/useGetGlobalInfo';

const LetterReviewPage = () => {
  const { caseId: routeCaseId } = useParams();
  const { selectedRegion, handleChangeRegion } = useGetGlobalInfo() || {};
  const context = useContext(DataSourceContext) || {};
  const dataSources = context.dataSources || {};
  const regions = Object.keys(dataSources).filter(r => dataSources[r].type === 'dynamic');

  // 1. Region automatisch initialisieren
  const [region, setRegion] = useState(selectedRegion || regions[0] || '');
  useEffect(() => {
    if (handleChangeRegion && region) handleChangeRegion(region);
  }, [region, handleChangeRegion]);

  // 2. Lokale Cases & Templates
  const [localCases, setLocalCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(routeCaseId || '');
  const [selectedTemplateCase, setSelectedTemplateCase] = useState('');

  useEffect(() => {
    if (!region) return;
    const local = dataSources[region]?.sources?.local || [];
    setLocalCases(local);
    setSelectedTemplateCase(local[0]?.id || '');
    // Defaults setzen
    setSelectedCase(prev => prev || local[0]?.id || '');
  }, [region, dataSources, routeCaseId]);

  // 3. Brief-Inhalte
  const [letter, setLetter] = useState({
    patientAndDate: '',
    anamnesis: '',
    preexistingConditions: '',
    medications: '',
    consumables: '',
    socialHistory: '',
    familyHistory: '',
    differentialDiagnosis: '',
    furtherProcedure: '',
    therapy: ''
  });
  const [options, setOptions] = useState({
    compareWithTemplate: true,
    grammarStyleOnly: false
  });
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tokenCount, setTokenCount] = useState(0);
  const [costUsd, setCostUsd] = useState(0);

  // 4. Helfer: nur nicht-leere Felder, patientAndDate ausfiltern
  const buildPromptData = () => {
    const filtered = Object.entries(letter)
      .filter(([k, v]) => k !== 'patientAndDate' && v && v.trim() !== '')
      .reduce((acc, [k, v]) => ({ ...acc, [k]: v.trim() }), {});
    return {
      caseId: selectedCase,
      ...(options.compareWithTemplate && { templateCaseId: selectedTemplateCase }),
      userLetter: filtered
    };
  };

  // 5. Review-Handler
  const handleReview = async () => {
    setLoading(true);
    const payload = buildPromptData();
    const systemMsg = options.compareWithTemplate
      ? `Vergleiche diesen Arzt-Brief für Fall ${selectedCase} mit der Vorlage ${selectedTemplateCase}.`
      : `Prüfe diesen Arzt-Brief für Fall ${selectedCase}.`;
    const { data, error } = await supabase.functions.invoke('openai-proxy', {
      body: {
        model: 'gpt-4o-mini',
        temperature: 0,
        messages: [
          { role: 'system',  content: systemMsg },
          { role: 'user',    content: JSON.stringify(payload) }
        ]
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

  // 6. Memoisierte Statusanzeigen
  const statsInfo = useMemo(() => ({
    casesCount: localCases.length
  }), [localCases]);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <h1>
          {selectedCase
            ? `Arzt-Brief Review – Fall ${selectedCase}`
            : 'Arzt-Brief Review'}
        </h1>

        <div className={styles.counters}>
          <span>Tokens: {tokenCount}</span>
          <span>Kosten: €{costUsd.toFixed(4)}</span>
        </div>

        <div className={styles.stats}>
          <div>Fälle in {dataSources[region]?.name}: {statsInfo.casesCount}</div>
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

          {/* Region & Fall */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Region</label>
              <select value={region} onChange={e => setRegion(e.target.value)}>
                {regions.map(r =>
                  <option key={r} value={r}>{dataSources[r].name}</option>
                )}
              </select>
            </div>
            <div className={styles.field}>
              <label>Fall</label>
              <select value={selectedCase} onChange={e => setSelectedCase(e.target.value)}>
                {localCases.map(c =>
                  <option key={c.id} value={c.id}>
                    {c.fileDisplayName || c.name || c.id}
                  </option>
                )}
              </select>
            </div>
          </div>

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
              <select value={selectedTemplateCase} onChange={e => setSelectedTemplateCase(e.target.value)}>
                {localCases.map(c =>
                  <option key={c.id} value={c.id}>
                    {c.fileDisplayName || c.name || c.id}
                  </option>
                )}
              </select>
            </div>
          )}

          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? 'Prüfe…' : 'Brief prüfen'}
          </button>
        </form>

        {/* Feedback */}
        {feedback && (
          <div className={styles.feedback}>
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