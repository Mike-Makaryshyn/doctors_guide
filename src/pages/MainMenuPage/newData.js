const newsData = [
    {
       title: {
          en: "First platform launch!",
          uk: "Перший запуск платформи!",
          ru: "Первый запуск платформы!",
          de: "Erster Start der Plattform!",
          tr: "Platformun ilk lansmanı!",
          ar: "إطلاق المنصة لأول مرة!",
          fr: "Premier lancement de la plateforme!",
          es: "¡Primer lanzamiento de la plataforma!",
          pl: "Pierwsze uruchomienie platformy!",
          el: "Πρώτη εκκίνηση της πλατφόρμας!",
          ro: "Prima lansare a platformei!"
       },
       summary: {
          en: "We are excited to announce the launch of our new platform.",
          uk: "Ми раді повідомити про запуск нашої нової платформи.",
          ru: "Мы рады объявить о запуске нашей новой платформы.",
          de: "Wir freuen uns, den Start unserer neuen Plattform bekannt zu geben.",
          tr: "Yeni platformumuzun lansmanını duyurmaktan heyecan duyuyoruz.",
          ar: "نحن متحمسون للإعلان عن إطلاق منصتنا الجديدة.",
          fr: "Nous sommes ravis d'annoncer le lancement de notre nouvelle plateforme.",
          es: "Estamos emocionados de anunciar el lanzamiento de nuestra nueva plataforma.",
          pl: "Jesteśmy podekscytowani, mogąc ogłosić uruchomienie naszej nowej platformy.",
          el: "Είμαστε ενθουσιασμένοι να ανακοινώσουμε την έναρξη της νέας μας πλατφόρμας.",
          ro: "Suntem încântați să anunțăm lansarea noii noastre platforme."
       },
       fullText: {
          en: "Detailed information about the launch of our platform in English. Additional details: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
          uk: "Детальна інформація про запуск нашої платформи українською. Додаткові деталі: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
          ru: "Подробная информация о запуске нашей платформы на русском. Дополнительные детали: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
          de: "Ausführliche Informationen zum Start unserer Plattform auf Deutsch. Zusätzliche Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
          tr: "Platformumuzun lansmanı hakkında detaylı bilgiler Türkçe. Ek bilgiler: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
          ar: "معلومات مفصلة حول إطلاق منصتنا باللغة العربية. تفاصيل إضافية: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
          fr: "Informations détaillées sur le lancement de notre plateforme en français. Détails supplémentaires: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
          es: "Información detallada sobre el lanzamiento de nuestra plataforma en español. Detalles adicionales: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
          pl: "Szczegółowe informacje o uruchomieniu naszej platformy po polsku. Dodatkowe szczegóły: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
          el: "Λεπτομερείς πληροφορίες για την εκκίνηση της πλατφόρμας μας στα Ελληνικά. Πρόσθετες λεπτομέρειες: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
          ro: "Informații detaliate despre lansarea platformei noastre în română. Detalii suplimentare: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris."
       },
       date: "27.03.2025",
    },
    {
       title: {
          en: "New Regional Updates",
          uk: "Нові оновлення для регіонів",
          ru: "Новые обновления по регионам",
          de: "Neue regionale Updates",
          tr: "Bölgesel güncellemeler",
          ar: "تحديثات إقليمية جديدة",
          fr: "Nouvelles mises à jour régionales",
          es: "Nuevas actualizaciones regionales",
          pl: "Nowe aktualizacje regionalne",
          el: "Νέες περιφερειακές ενημερώσεις",
          ro: "Actualizări regionale noi"
       },
       summary: {
          en: "We have added more detailed information for each region.",
          uk: "Ми додали більше детальної інформації для кожного регіону.",
          ru: "Мы добавили более подробную информацию для каждого региона.",
          de: "Wir haben detailliertere Informationen für jede Region hinzugefügt.",
          tr: "Her bölge için daha detaylı bilgi ekledik.",
          ar: "لقد أضفنا معلومات أكثر تفصيلاً لكل منطقة.",
          fr: "Nous avons ajouté des informations plus détaillées pour chaque région.",
          es: "Hemos añadido información más detallada para cada región.",
          pl: "Dodaliśmy bardziej szczegółowe informacje dla każdego regionu.",
          el: "Προσθέσαμε πιο λεπτομερείς πληροφορίες για κάθε περιοχή.",
          ro: "Am adăugat informații mai detaliate pentru fiecare regiune."
       },
       fullText: {
          en: "Detailed regional updates with all the latest information and requirements. Additional insights: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue.",
          uk: "Детальні оновлення регіонів з усією останньою інформацією та вимогами. Додаткові відомості: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue.",
          ru: "Подробные обновления регионов с последней информацией и требованиями. Дополнительная информация: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue.",
          de: "Ausführliche regionale Updates mit allen neuesten Informationen und Anforderungen. Zusätzliche Einblicke: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue.",
          tr: "En son bilgiler ve gereksinimlerle detaylı bölgesel güncellemeler. Ek bilgiler: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue.",
          ar: "تحديثات إقليمية مفصلة مع أحدث المعلومات والمتطلبات. رؤى إضافية: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue.",
          fr: "Mises à jour régionales détaillées avec toutes les dernières informations et exigences. Informations supplémentaires: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue.",
          es: "Actualizaciones regionales detalladas con toda la información y requisitos más recientes. Información adicional: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue.",
          pl: "Szczegółowe aktualizacje regionalne ze wszystkimi najnowszymi informacjami i wymaganiami. Dodatkowe informacje: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue.",
          el: "Λεπτομερείς περιφερειακές ενημερώσεις με όλες τις τελευταίες πληροφορίες και απαιτήσεις. Πρόσθετες πληροφορίες: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue.",
          ro: "Actualizări regionale detaliate cu toate informațiile și cerințele recente. Informații suplimentare: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue."
       },
       date: "20.03.2025",
    },
 ];
 
 export default newsData;