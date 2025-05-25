

export const languages = {
  en: {
    title: "Subscription Management",
    statusLabel: "Status",
    active: "Active",
    validUntil: "Valid until",
    processing: "Processing...",
    cancelButton: "Cancel Subscription",
    noSubscription: "You have no active subscription.",
    subscribeButton: "Subscribe now",
    errorCancel: "Error canceling subscription: {{message}}",
    successCancel: "Subscription successfully canceled."
  },
  uk: {
    title: "Управління підпискою",
    statusLabel: "Статус",
    active: "Активна",
    validUntil: "Дійсна до",
    processing: "Обробка...",
    cancelButton: "Скасувати підписку",
    noSubscription: "У вас немає активної підписки.",
    subscribeButton: "Оформити підписку",
    errorCancel: "Помилка при скасуванні підписки: {{message}}",
    successCancel: "Підписку успішно скасовано."
  }
};

export const DEFAULT_LANGUAGE = Object.keys(languages)[0];