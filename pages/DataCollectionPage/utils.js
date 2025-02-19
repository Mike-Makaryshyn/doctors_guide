// src/pages/DataCollectionPage/utils.js

/**
 * Серіалізує масив запитань-відповідей у Markdown-рядок.
 * @param {Array<{question: string, answer: string}>} questionsArray
 * @returns {string} Серіалізований Markdown-рядок
 */
export const serializeExaminerQuestions = (questionsArray) => {
    return questionsArray
      .map(pair => {
        return `**Frage:** ${pair.question}  
  **Antwort:** ${pair.answer}`;
      })
      .join('\n\n'); // Розділяємо пари двома новими рядками
  };
  
  /**
   * Десеріалізує Markdown-рядок у масив запитань-відповідей.
   * @param {string} markdownString
   * @returns {Array<{question: string, answer: string}>}
   */
  export const deserializeExaminerQuestions = (markdownString) => {
    if (!markdownString) return [];
  
    return markdownString.split('\n\n').map(entry => {
      const [questionLine, answerLine] = entry.split('\n**Antwort:** ');
      const questionMatch = questionLine.match(/\*\*Frage:\*\* (.+)/);
      return {
        question: questionMatch ? questionMatch[1].trim() : '',
        answer: answerLine ? answerLine.trim() : '',
      };
    });
  };
  
  /**
   * Серіалізує масив запитань-відповідей у Markdown-рядок для Tab3.
   * @param {Array<{question: string, answer: string}>} questionsArray
   * @returns {string} Серіалізований Markdown-рядок
   */
  export const serializePatientQuestions = (questionsArray) => {
    return questionsArray
      .map(pair => {
        return `**Frage:** ${pair.question}  
  **Antwort:** ${pair.answer}`;
      })
      .join('\n\n');
  };
  
  /**
   * Десеріалізує Markdown-рядок у масив запитань-відповідей для Tab3.
   * @param {string} markdownString
   * @returns {Array<{question: string, answer: string}>}
   */
  export const deserializePatientQuestions = (markdownString) => {
    if (!markdownString) return [];
  
    return markdownString.split('\n\n').map(entry => {
      const [questionLine, answerLine] = entry.split('\n**Antwort:** ');
      const questionMatch = questionLine.match(/\*\*Frage:\*\* (.+)/);
      return {
        question: questionMatch ? questionMatch[1].trim() : '',
        answer: answerLine ? answerLine.trim() : '',
      };
    });
  };