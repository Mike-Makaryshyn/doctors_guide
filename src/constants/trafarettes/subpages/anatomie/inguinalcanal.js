export default {
  path: "inguinalcanal",
  folder: "anatomie",
  content: [
    {
      id: 1,
      title: "Inguinalkanal",
      childTabs: [
        {
          id: 1,
          title: "Anatomie",
          component: "InguinalCanal3D"   // ← ключ для Trafarette
        },
        {
          id: 2,
          title: "Anatomie (Text)",
          textWithFormatting: `<div><p>Тут буде опис пахвинного каналу…</p></div>`
        }
      ]
    },
    // решта табів (питання, факти) за потреби
  ]
};