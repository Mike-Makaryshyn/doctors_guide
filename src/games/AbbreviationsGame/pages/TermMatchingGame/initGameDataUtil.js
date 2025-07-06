// Утиліта для підготовки ігрових даних для TermMatchingGame

/**
 * Повертає підготовлені пари, ліву/праву колонку, оновлені лічильники shownCounts
 * @param {Array} medicalAbbreviations - масив абревіатур
 * @param {Object} abbreviationStatuses - статуси абревіатур
 * @param {string} selectedCategory - вибрана категорія
 * @param {string} filterMode - режим фільтрації (all/learned/unlearned/paused)
 * @param {string|number} questionCount - кількість питань (або 'all')
 * @param {string} displayMode - режим відображення (LatGerman/GermanLat/Mixed)
 * @param {Object} shownCounts - поточні лічильники показів
 * @returns {Object} { pairs, leftColumn, rightColumn, newShownCounts }
 */
export function initGameDataUtil({
  medicalAbbreviations,
  abbreviationStatuses,
  selectedCategory,
  filterMode,
  questionCount,
  displayMode,
  shownCounts = {},
}) {
  // 1. Фільтрація абревіатур за категорією та статусом
  let filtered = medicalAbbreviations.filter((abbr) => {
    const matchesCategory =
      selectedCategory === "Alle" ||
      (abbr.categories || []).includes(selectedCategory);
    const status = abbreviationStatuses[abbr.id]?.status || "unlearned";

    if (filterMode === "learned" && status !== "learned") return false;
    if (filterMode === "paused" && status !== "paused") return false;
    if (filterMode === "unlearned" && (status === "learned" || status === "paused"))
      return false;
    return matchesCategory;
  });

  // 2. Сортування за кількістю показів
  filtered = filtered.sort((a, b) => {
    const countA = shownCounts[a.id] || 0;
    const countB = shownCounts[b.id] || 0;
    if (countA === countB) return Math.random() - 0.5;
    return countA - countB;
  });

  // 3. Відбір потрібної кількості (questionCount)
  if (questionCount !== "all") {
    filtered = filtered.slice(0, questionCount);
  }

  // 4. Оновлення лічильників показів
  const newShownCounts = { ...shownCounts };
  filtered.forEach((abbr) => {
    newShownCounts[abbr.id] = (newShownCounts[abbr.id] || 0) + 1;
  });

  // 5. Формування пар: ліва й права колонки
  const newPairs = filtered.map((abbr) => {
    let mode = displayMode;
    if (mode === "Mixed") {
      mode = Math.random() < 0.5 ? "LatGerman" : "GermanLat";
    }
    let leftText, rightText;
    if (mode === "LatGerman") {
      leftText = abbr.abbreviation;
      rightText = abbr.name;
    } else {
      leftText = abbr.name;
      rightText = abbr.abbreviation;
    }
    return {
      id: abbr.id,
      leftText,
      rightText,
      original: abbr,
    };
  });

  // Перетасовка лівого та правого списків
  function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }
  const shuffledLeft = shuffleArray(newPairs);
  const shuffledRight = shuffleArray(newPairs);

  return {
    pairs: newPairs,
    leftColumn: shuffledLeft,
    rightColumn: shuffledRight,
    newShownCounts,
  };
} 