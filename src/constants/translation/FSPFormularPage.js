// src/constants/translation/FSPFormularPage.js

const FSPFormularPageData = {
  modal: {
    selectDataSource: {
      title: "Виберіть джерело даних",
      closeButton: "Закрити",
      tooltip: "Натисніть, щоб вибрати джерело даних.",
    },
    additionalInfo: {
      title: "Додаткова інформація",
    },
  },
  personalData: {
    additionalInfo: `
### **Anamnese: Erfassung persönlicher Daten**


#### **Schritt 1: Erfragen des Namens**

Beginnen Sie das Gespräch mit einer höflichen und freundlichen Begrüßung. Fragen Sie nach dem vollständigen Namen des Patienten, um eine persönliche und respektvolle Atmosphäre zu schaffen.

**Anleitung:**
- Starten Sie das Gespräch mit einer Begrüßung.
- Stellen Sie eine direkte Frage nach dem Namen des Patienten.
- Nutzen Sie offene Fragen, um dem Patienten Raum für ausführliche Antworten zu geben.

**Beispiele:**
- "Guten Tag, schön Sie kennenzulernen. Wie heißen Sie?"
- "Hallo, ich bin Dr. Müller. Wie ist Ihr voller Name?"
- "Willkommen in unserer Praxis. Könnten Sie mir bitte Ihren Namen nennen?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich heiße Anna Müller."
- **Arzt:** "Schön, Sie kennenzulernen, Frau Müller. Haben Sie einen zweiten Vornamen?"

---

#### **Schritt 2: Buchstabierung des Namens**

Um Missverständnisse zu vermeiden, bitten Sie den Patienten, seinen Vor- und Nachnamen zu buchstabieren. Dies ist besonders wichtig bei ungewöhnlichen oder schwer auszusprechenden Namen.

**Anleitung:**
- Bitten Sie den Patienten höflich um die Buchstabierung seines Namens.
- Wiederholen Sie den Namen nach dem Buchstabieren, um die Richtigkeit zu bestätigen.

**Beispiele:**
- "Könnten Sie bitte Ihren Vor- und Nachnamen buchstabieren?"
- "Wie schreibt man Ihren Nachnamen?"
- "Bitte buchstabieren Sie Ihren Vornamen für mich."

**Mögliche Antworten und Follow-ups:**
- **Patient:** "A-n-n-a M-ü-l-l-e-r."
- **Arzt:** "Danke, das hilft sehr. So stelle ich sicher, dass alles korrekt in unseren Unterlagen ist."

---

#### **Schritt 3: Erfragen des Alters und Geburtsdatums**

Fragen Sie nach dem Alter des Patienten und, falls erforderlich, nach dem genauen Geburtsdatum. Dies kann für medizinische Berechnungen und die Einschätzung von Gesundheitsrisiken wichtig sein. Wenn der Geburtstag kürzlich war, gratulieren Sie dem Patienten.

**Anleitung:**
- Stellen Sie direkte Fragen nach dem Alter und Geburtsdatum.
- Achten Sie auf Hinweise im Gespräch, die auf einen kürzlichen Geburtstag hinweisen könnten.

**Beispiele:**
- "Wie alt sind Sie?"
- "Wann sind Sie geboren?"
- "Könnten Sie mir Ihr genaues Geburtsdatum nennen?"
- "Haben Sie kürzlich Geburtstag gehabt? Herzlichen Glückwunsch nachträglich!"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich bin 45 Jahre alt."
- **Arzt:** "Und Ihr genaues Geburtsdatum?"
- **Patient:** "Am 12. März 1979."
- **Arzt:** "Alles klar, danke. Haben Sie vor Kurzem Geburtstag gefeiert? Herzlichen Glückwunsch nachträglich!"

---

#### **Schritt 4: Körpergröße erfragen**

Die Körpergröße des Patienten ist ein wichtiger Faktor für verschiedene medizinische Berechnungen, wie den Body-Mass-Index (BMI).

**Anleitung:**
- Fragen Sie direkt nach der Körpergröße.
- Nutzen Sie verschiedene Formulierungen, um sicherzustellen, dass der Patient die Frage versteht.

**Beispiele:**
- "Wie groß sind Sie?"
- "Könnten Sie mir bitte Ihre Körpergröße nennen?"
- "Wie hoch sind Sie in Zentimetern?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich bin 170 cm groß."
- **Arzt:** "Danke. Das ist wichtig für die Berechnung Ihres BMI."

---

#### **Schritt 5: Gewicht erfragen**

Das Gewicht des Patienten ist ebenfalls essenziell für medizinische Bewertungen und Behandlungspläne.

**Anleitung:**
- Stellen Sie eine direkte Frage nach dem aktuellen Gewicht.
- Fragen Sie nach dem Gewicht in Kilogramm, um Klarheit zu gewährleisten.

**Beispiele:**
- "Wie viel wiegen Sie?"
- "Könnten Sie mir bitte Ihr aktuelles Gewicht nennen?"
- "Was ist Ihr Gewicht in Kilogramm?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich wiege 70 Kilogramm."
- **Arzt:** "Vielen Dank. Damit können wir Ihren Body-Mass-Index berechnen."

---

#### **Schritt 6: Geschlecht erfragen**

Das Geschlecht des Patienten ist wichtig für die Anpassung der medizinischen Behandlung und die Berücksichtigung geschlechtsspezifischer Gesundheitsaspekte.

**Anleitung:**
- Fragen Sie direkt nach dem Geschlecht, falls es nicht offensichtlich ist.
- Verwenden Sie eine respektvolle und einfühlsame Sprache.

**Beispiele:**
- "Welches Geschlecht haben Sie?"
- "Sind Sie männlich oder weiblich?"
- "Wie ist Ihr Geschlecht?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich bin weiblich."
- **Arzt:** "Danke. Das hilft uns, die Behandlung besser anzupassen."

---
        `,
  },
  currentAnamnese: {
    additionalInfo: `### **Anamnese: Aktueller Anamnese**

#### **Aktueller Anamnese**

- **Besuchsgrund (Grund des Besuchs):**
- **Schmerzlokalisierung (Lokalisation der Schmerzen):**
- **Zeitverlauf (Zeitlicher Verlauf):**
- **Symptombeschreibung (Beschreibung der Symptome):**
- **Schmerzausstrahlung (Ausstrahlung der Schmerzen):**
- **Schmerzverlauf (Verlauf der Schmerzen):**
- **Auslöser (Auslöser der Beschwerden):**
- **Schmerzintensität (Intensität der Schmerzen):**
- **Vorherige medizinische Betreuung (Vorherige medizinische Betreuung):**

---

#### **Schritt 1: Besuchsgrund erfragen**

Ermitteln Sie den Hauptgrund des Besuchs, um die Anliegen des Patienten zu verstehen und gezielt darauf eingehen zu können.

**Anleitung:**
- Stellen Sie eine offene Frage, um dem Patienten die Möglichkeit zu geben, seine Anliegen frei zu äußern.
- Hören Sie aktiv zu und notieren Sie die wichtigsten Punkte.

**Beispiele:**
- "Was führt Sie heute zu uns?"
- "Wie kann ich Ihnen helfen?"
- "Was ist der Hauptgrund für Ihren heutigen Besuch?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich habe seit ein paar Tagen starke Kopfschmerzen."
- **Arzt:** "Verstehe. Können Sie mir mehr über die Kopfschmerzen erzählen?"

---

#### **Schritt 2: Schmerzlokalisierung erfragen**

Bestimmen Sie den genauen Ort des Schmerzes, um mögliche Ursachen einzugrenzen.

**Anleitung:**
- Fragen Sie nach dem genauen Bereich, in dem der Schmerz empfunden wird.
- Nutzen Sie anatomische Begriffe oder Bildmaterial, falls verfügbar.

**Beispiele:**
- "Wo genau haben Sie Schmerzen?"
- "Könnten Sie den Schmerzbereich genauer beschreiben?"
- "In welchem Teil Ihres Körpers verspüren Sie den Schmerz?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Der Schmerz ist auf der rechten Seite meines Bauches."
- **Arzt:** "Haben Sie den Schmerz in einem bestimmten Bereich wie dem Ober- oder Unterbauch?"

---

#### **Schritt 3: Zeitverlauf erfragen**

Verstehen Sie, wann und wie lange die Symptome bereits bestehen, um den Verlauf der Beschwerden zu beurteilen.

**Anleitung:**
- Fragen Sie nach dem Beginn der Symptome und deren Entwicklung im Laufe der Zeit.
- Erkundigen Sie sich nach Faktoren, die den Verlauf beeinflussen könnten.

**Beispiele:**
- "Seit wann haben Sie diese Beschwerden?"
- "Wie haben sich die Symptome im Laufe der Zeit verändert?"
- "Wann haben die Schmerzen begonnen?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Die Schmerzen begannen vor drei Tagen und sind seitdem schlimmer geworden."
- **Arzt:** "Gab es einen Auslöser für die ersten Schmerzen, zum Beispiel eine Verletzung oder eine bestimmte Aktivität?"

---

#### **Schritt 4: Symptombeschreibung erfragen**

Erhalten Sie eine detaillierte Beschreibung der Symptome, um eine genaue Diagnose zu unterstützen.

**Anleitung:**
- Bitten Sie den Patienten, die Symptome so genau wie möglich zu beschreiben.
- Fragen Sie nach zusätzlichen Symptomen, die möglicherweise vorhanden sind.

**Beispiele:**
- "Können Sie die Art der Schmerzen beschreiben? Sind sie stechend, dumpf oder brennend?"
- "Haben Sie neben den Schmerzen noch andere Symptome bemerkt?"
- "Wie würden Sie die Intensität Ihrer Symptome beschreiben?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Die Schmerzen sind stechend und kommen in Wellen."
- **Arzt:** "Treten die Schmerzen plötzlich auf oder sind sie allmählich begonnen?"

---

#### **Schritt 5: Schmerzausstrahlung erfragen**

Ermitteln Sie, ob und wohin die Schmerzen ausstrahlen, um mögliche zugrunde liegende Probleme zu identifizieren.

**Anleitung:**
- Fragen Sie, ob die Schmerzen von einem Ort zum anderen wandern.
- Nutzen Sie bildhafte Sprache, um die Ausbreitung der Schmerzen besser zu verstehen.

**Beispiele:**
- "Strahlen die Schmerzen irgendwo andershin aus?"
- "Fühlen Sie den Schmerz nur an einem Ort oder verteilt sich der Schmerz?"
- "Kommt der Schmerz in andere Bereiche Ihres Körpers?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ja, die Schmerzen strahlen in meinen Rücken aus."
- **Arzt:** "Haben Sie auch Schmerzen in Ihren Beinen bemerkt?"

---

#### **Schritt 6: Schmerzverlauf erfragen**

Verstehen Sie, wie die Schmerzen im Laufe der Zeit variieren, um Muster oder Auslöser zu identifizieren.

**Anleitung:**
- Fragen Sie nach Schwankungen in der Schmerzintensität oder -häufigkeit.
- Erkundigen Sie sich, ob bestimmte Aktivitäten oder Ruhephasen den Schmerz beeinflussen.

**Beispiele:**
- "Verändert sich die Intensität der Schmerzen im Laufe des Tages?"
- "Sind die Schmerzen konstant oder kommen und gehen sie?"
- "Gibt es Zeiten, in denen die Schmerzen besser oder schlimmer sind?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Die Schmerzen sind morgens schlimmer und bessern sich im Laufe des Tages."
- **Arzt:** "Haben Sie bemerkt, ob bestimmte Aktivitäten die Schmerzen beeinflussen?"

---

#### **Schritt 7: Auslöser erfragen**

Identifizieren Sie mögliche Auslöser, die die Beschwerden verursachen oder verschlimmern könnten.

**Anleitung:**
- Fragen Sie nach spezifischen Ereignissen oder Aktivitäten, die den Schmerz ausgelöst haben.
- Erkundigen Sie sich nach Lebensgewohnheiten, die relevant sein könnten.

**Beispiele:**
- "Gab es einen bestimmten Vorfall, der die Schmerzen ausgelöst hat?"
- "Welche Aktivitäten führen dazu, dass die Schmerzen schlimmer werden?"
- "Haben Sie etwas Bestimmtes gegessen oder getrunken, das die Symptome beeinflusst hat?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich habe gestern beim Heben einer schweren Kiste meinen Rücken verletzt."
- **Arzt:** "Haben Sie seitdem irgendwelche Maßnahmen ergriffen, um die Schmerzen zu lindern?"

---

#### **Schritt 8: Schmerzintensität erfragen**

Messen Sie die Intensität der Schmerzen, um die Dringlichkeit der Behandlung zu bestimmen.

**Anleitung:**
- Verwenden Sie eine Schmerzskala, um die Intensität zu quantifizieren.
- Fragen Sie nach subjektiven Empfindungen des Schmerzes.

**Beispiele:**
- "Auf einer Skala von 1 bis 10, wie stark sind Ihre Schmerzen?"
- "Wie würden Sie die Intensität Ihrer Schmerzen beschreiben?"
- "Gibt es Momente, in denen der Schmerz besonders stark ist?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich würde meine Schmerzen mit einer 7 auf der Skala bewerten."
- **Arzt:** "Vielen Dank. Haben Sie auch Schmerzmittel eingenommen? Wenn ja, welche und wie wirksam waren sie?"

---

#### **Schritt 9: Vorherige medizinische Betreuung erfragen**

Erfahren Sie, ob der Patient bereits medizinische Hilfe in Anspruch genommen hat, um die Behandlung fortzusetzen oder anzupassen.

**Anleitung:**
- Fragen Sie nach bisherigen Untersuchungen oder Behandlungen.
- Erkundigen Sie sich nach den Ergebnissen und der Wirksamkeit früherer Maßnahmen.

**Beispiele:**
- "Haben Sie bereits medizinische Hilfe für diese Beschwerden in Anspruch genommen?"
- "Wurden schon Untersuchungen oder Behandlungen durchgeführt?"
- "Welche Maßnahmen wurden bisher ergriffen, um die Schmerzen zu lindern?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ja, ich war bereits bei meinem Hausarzt und habe Schmerzmittel bekommen, aber sie helfen nicht wirklich."
- **Arzt:** "Welche Schmerzmittel haben Sie eingenommen und wie oft?"

---

### **Beispielgespräch für den aktuellen Anamnese**

**Arzt:** "Guten Tag, schön Sie kennenzulernen. Was führt Sie heute zu uns?"

**Patient:** "Ich habe seit ein paar Tagen starke Rückenschmerzen."

**Arzt:** "Verstehe. Wo genau haben Sie die Schmerzen?"

**Patient:** "Die Schmerzen sind auf der rechten Seite meines Rückens."

**Arzt:** "Seit wann haben Sie diese Beschwerden?"

**Patient:** "Die Schmerzen begannen vor drei Tagen und sind seitdem schlimmer geworden."

**Arzt:** "Können Sie die Art der Schmerzen beschreiben? Sind sie stechend, dumpf oder brennend?"

**Patient:** "Die Schmerzen sind stechend und kommen in Wellen."

**Arzt:** "Strahlen die Schmerzen irgendwo andershin aus?"

**Patient:** "Ja, die Schmerzen strahlen in meinen Nacken aus."

**Arzt:** "Verändert sich die Intensität der Schmerzen im Laufe des Tages?"

**Patient:** "Die Schmerzen sind morgens schlimmer und bessern sich im Laufe des Tages."

**Arzt:** "Gab es einen bestimmten Vorfall, der die Schmerzen ausgelöst hat?"

**Patient:** "Ich habe gestern beim Heben einer schweren Kiste meinen Rücken verletzt."

**Arzt:** "Auf einer Skala von 1 bis 10, wie stark sind Ihre Schmerzen?"

**Patient:** "Ich würde meine Schmerzen mit einer 7 auf der Skala bewerten."

**Arzt:** "Haben Sie bereits medizinische Hilfe für diese Beschwerden in Anspruch genommen?"

**Patient:** "Ja, ich war bereits bei meinem Hausarzt und habe Schmerzmittel bekommen, aber sie helfen nicht wirklich."

**Arzt:** "Danke, das hilft uns weiter. Lassen Sie uns nun eine genauere Untersuchung durchführen."

---

### **Zusätzliche Fragen zur Vertiefung**

**Zum Besuchsgrund:**
- "Gibt es noch andere Gründe, warum Sie heute hier sind?"
- "Haben Sie Nebenbeschwerden neben den Rückenschmerzen?"

**Zur Schmerzlokalisierung:**
- "Können Sie den Schmerz genauer lokalisieren, zum Beispiel in der Lenden- oder im oberen Rückenbereich?"
- "Fühlen Sie den Schmerz mehr links oder rechts?"

**Zum Zeitverlauf:**
- "Haben sich die Schmerzen im Laufe der Zeit verändert? Sind sie kontinuierlich oder intermittierend?"
- "Gab es bestimmte Ereignisse, die den Schmerz verschlimmert haben?"

**Zur Symptombeschreibung:**
- "Haben Sie Fieber, Schüttelfrost oder andere allgemeine Symptome bemerkt?"
- "Haben Sie Schwierigkeiten beim Bewegen oder Heben von Gegenständen?"

**Zur Schmerzausstrahlung:**
- "Strahlen die Schmerzen bis in Ihre Beine aus?"
- "Fühlen Sie ein Taubheitsgefühl oder Kribbeln in anderen Körperteilen?"

**Zum Schmerzverlauf:**
- "Ist der Schmerz gleichmäßig oder variiert er in seiner Intensität?"
- "Haben sich die Schmerzen über den Tag verteilt verändert?"

**Zu Auslösern:**
- "Haben Sie in letzter Zeit neue Aktivitäten aufgenommen oder ungewöhnliche Bewegungen gemacht?"
- "Gibt es bestimmte Bewegungen, die den Schmerz auslösen oder verschlimmern?"

**Zur Schmerzintensität:**
- "Hat sich die Schmerzintensität seit Beginn verändert?"
- "Wie stark beeinträchtigen die Schmerzen Ihren Alltag?"

**Zur vorherigen medizinischen Betreuung:**
- "Haben Sie bereits Physiotherapie oder andere Behandlungen versucht?"
- "Wie haben Sie auf die bisherigen Behandlungen reagiert?"

### **Tipps zur Gesprächsführung**

1. **Freundlichkeit und Empathie:** Zeigen Sie Verständnis für die Beschwerden des Patienten und seien Sie einfühlsam.
   
   **Beispiel:**
   - "Es tut mir leid zu hören, dass Sie solche Schmerzen haben. Lassen Sie uns sehen, wie wir Ihnen helfen können."

2. **Klarheit und Einfachheit:** Verwenden Sie klare und einfache Sprache, um Missverständnisse zu vermeiden.
   
   **Beispiel:**
   - Statt "Sind Sie in der Lage, Ihre Schmerzen auf einer Skala von 1 bis 10 zu bewerten?" verwenden Sie "Wie stark sind Ihre Schmerzen von 1 bis 10?"

3. **Aktives Zuhören:** Bestätigen Sie das Gehörte durch Nicken oder kurze verbale Bestätigungen.
   
   **Beispiel:**
   - "Verstehe, die Schmerzen sind seit drei Tagen schlimmer geworden."

4. **Offene Fragen stellen:** Fördern Sie ausführliche Antworten durch offene Fragen.
   
   **Beispiel:**
   - "Können Sie mir mehr über Ihre Symptome erzählen?"

5. **Geduld haben:** Geben Sie dem Patienten genügend Zeit, um seine Antworten zu formulieren.

6. **Zusammenfassen und Bestätigen:** Wiederholen Sie wichtige Informationen, um Missverständnisse zu vermeiden.
   
   **Beispiel:**
   - "Also, wenn ich Sie richtig verstanden habe, haben Sie seit drei Tagen starke Rückenschmerzen, die in Ihren Nacken ausstrahlen?"

7. **Anpassung an den Patienten:** Berücksichtigen Sie den sprachlichen Hintergrund und das Verständnisniveau des Patienten. Verwenden Sie einfache Sprache, falls nötig.

8. **Nonverbale Kommunikation:** Achten Sie auf Ihre Körpersprache. Lächeln, Augenkontakt und eine offene Haltung fördern das Vertrauen.

9. **Natürlicher Gesprächsfluss:** Vermeiden Sie starre Fragenfolgen. Passen Sie sich dem Gesprächsverlauf des Patienten an.
   
   **Beispiel:**
   - "Wie geht es Ihnen heute? Übrigens, bevor wir anfangen, könnten Sie mir bitte den Grund Ihres Besuchs nennen?"

10. **Zeit nehmen:** Geben Sie dem Patienten genügend Zeit, um auf Fragen zu antworten, besonders wenn es um persönliche Informationen geht.

---

### **Zusätzliche Beispielsätze für den Umgang mit dem aktuellen Anamnese**

- **Einleitung:**
  - "Guten Morgen/Tag/Abend, wie geht es Ihnen heute?"
  - "Danke, dass Sie gekommen sind. Lassen Sie uns mit einigen Fragen zu Ihrem aktuellen Zustand beginnen."

- **Besuchsgrund erfragen:**
  - "Was bringt Sie heute zu uns?"
  - "Welche Beschwerden haben Sie heute?"

- **Schmerzlokalisierung:**
  - "Können Sie den genauen Ort der Schmerzen beschreiben?"
  - "Wo genau fühlen Sie den Schmerz?"

- **Zeitverlauf:**
  - "Seit wann haben Sie diese Schmerzen?"
  - "Wie haben sich die Schmerzen seit dem Beginn verändert?"

- **Symptombeschreibung:**
  - "Wie würden Sie Ihre Symptome beschreiben?"
  - "Haben Sie neben den Schmerzen noch andere Symptome?"

- **Schmerzausstrahlung:**
  - "Strahlen die Schmerzen in andere Körperbereiche aus?"
  - "Fühlen Sie den Schmerz auch an anderen Stellen?"

- **Schmerzverlauf:**
  - "Sind die Schmerzen konstant oder kommen und gehen sie?"
  - "Wie haben sich die Schmerzen im Laufe des Tages verändert?"

- **Auslöser:**
  - "Gab es einen bestimmten Auslöser für die Schmerzen?"
  - "Was hat Ihrer Meinung nach die Schmerzen verursacht?"

- **Schmerzintensität:**
  - "Wie stark sind die Schmerzen auf einer Skala von 1 bis 10?"
  - "Wie sehr beeinträchtigen die Schmerzen Ihren Alltag?"

- **Vorherige medizinische Betreuung:**
  - "Haben Sie bereits medizinische Hilfe für diese Beschwerden in Anspruch genommen?"
  - "Welche Behandlungen wurden bisher durchgeführt?"
`,
  },

  vegetativeAnamnese: {
    additionalInfo: `
### **Anamnese: Vegetative Anamnese**

#### **Vegetative Anamnese**

- **Appetit:**
- **Gewicht:**
- **Übelkeit (Vomitismus, Magenverstimmung):**
- **Erbrechen (Vomitus, Übergeben):**
- **Stuhlgang (Defäkation, Koten, Scheißen):**
- **Wasserlassen (Miktion, Pipi machen, Pinkeln):**
- **Schwindel (Schwindelgefühl, Benommenheit, Vertigo):**
- **Bewusstsein (Aufmerksamkeit, Klarheit des Geistes):**
- **Schlafen (Schlaf, Ausruhen, Nachtisch liegen):**
- **Sexualanamnese (Sexualgeschichte):**
- **Sonstiges (Weitere Fragen, Andere Beschwerden):**
- **Gynäkologische Anamnese (nur für weibliche Patienten):**

---
#### **Schritt 1: Appetit erfragen**

Ermitteln Sie den Appetit des Patienten, um Essgewohnheiten und mögliche Verdauungsprobleme zu verstehen.

**Anleitung:**
- Stellen Sie offene Fragen zum Essverhalten.
- Achten Sie auf Veränderungen im Appetit, die auf gesundheitliche Probleme hinweisen könnten.

**Beispiele:**
- "Wie ist Ihr Appetit in letzter Zeit?"
- "Haben Sie bemerkt, dass Sie mehr oder weniger essen als sonst?"
- "Gibt es bestimmte Lebensmittel, die Sie lieber mögen oder vermeiden?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Mein Appetit ist ziemlich schlecht seit ein paar Wochen."
- **Arzt:** "Haben Sie das Gefühl, dass Ihnen etwas im Magen liegt oder dass Ihnen übel ist, wenn Sie essen?"

---
#### **Schritt 2: Gewicht erfragen**

Erfahren Sie, ob es Veränderungen im Gewicht des Patienten gibt, da dies auf verschiedene Gesundheitsprobleme hinweisen kann.

**Anleitung:**
- Fragen Sie nach aktuellem Gewicht und früheren Gewichtswerten.
- Erkundigen Sie sich nach möglichen Ursachen für Gewichtszunahme oder -abnahme.

**Beispiele:**
- "Haben Sie in letzter Zeit an Gewicht verloren oder zugenommen?"
- "Könnten Sie mir Ihr aktuelles Gewicht nennen?"
- "Haben sich Ihre Essgewohnheiten geändert, die Ihr Gewicht beeinflussen könnten?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ja, ich habe in den letzten drei Monaten etwa fünf Kilo abgenommen."
- **Arzt:** "Gab es einen bestimmten Grund für die Gewichtsabnahme, wie zum Beispiel Krankheit oder Stress?"

---
#### **Schritt 3: Übelkeit (Vomitismus, Magenverstimmung) erfragen**

Identifizieren Sie das Vorhandensein von Übelkeit, um mögliche gastrointestinale oder andere systemische Ursachen zu erkennen.

**Anleitung:**
- Fragen Sie direkt nach Übelkeit und deren Häufigkeit.
- Erkundigen Sie sich nach Auslösern und Begleitsymptomen.

**Beispiele:**
- "Fühlen Sie sich oft übel?"
- "Wann tritt die Übelkeit auf? Zum Beispiel nach dem Essen oder zu bestimmten Zeiten?"
- "Gibt es etwas, das Ihre Übelkeit lindert oder verschlimmert?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich fühle mich meistens nach dem Frühstück übel."
- **Arzt:** "Haben Sie auch andere Symptome wie Bauchschmerzen oder Erbrechen nach dem Frühstück?"

---
#### **Schritt 4: Erbrechen (Vomitus, Übergeben) erfragen**

Untersuchen Sie, ob der Patient erbrechen muss, um akute oder chronische Gesundheitsprobleme zu identifizieren.

**Anleitung:**
- Fragen Sie nach Häufigkeit und Umständen des Erbrechens.
- Ermitteln Sie die Art des Erbrochenen (z.B. Nahrung, Blut).

**Beispiele:**
- "Haben Sie in letzter Zeit erbrochen?"
- "Wie oft kommt es vor, dass Sie erbrechen müssen?"
- "Was kommt am häufigsten beim Erbrechen hoch?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich habe seit zwei Tagen zweimal erbrochen."
- **Arzt:** "War das Erbrechen nach dem Essen oder zu anderen Zeiten? Haben Sie auch andere Symptome wie Fieber oder Bauchschmerzen?"

---
#### **Schritt 5: Stuhlgang (Defäkation, Koten, Scheißen) erfragen**

Verstehen Sie das Stuhlgangverhalten des Patienten, um Verdauungsstörungen oder andere gastrointestinale Probleme zu erkennen.

**Anleitung:**
- Fragen Sie nach Häufigkeit, Konsistenz und Farbe des Stuhls.
- Erkundigen Sie sich nach Veränderungen im Stuhlgang.

**Beispiele:**
- "Wie oft haben Sie normalerweise Stuhlgang?"
- "Haben sich Ihre Stuhlgewohnheiten in letzter Zeit geändert?"
- "Gibt es etwas Auffälliges, wie Blut im Stuhl oder ungewöhnliche Konsistenz?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich habe jetzt seit einer Woche nur noch sehr selten Stuhlgang."
- **Arzt:** "Haben Sie etwas geändert, wie Ihre Ernährung oder Ihre Flüssigkeitszufuhr?"

---
#### **Schritt 6: Wasserlassen (Miktion, Pipi machen, Pinkeln) erfragen**

Ermitteln Sie das Wasserlassen (Miktion) des Patienten, um mögliche urologische oder systemische Probleme zu erkennen.

**Anleitung:**
- Fragen Sie nach Häufigkeit, Dringlichkeit und möglichen Schwierigkeiten beim Wasserlassen.
- Erkundigen Sie sich nach Schmerzen oder Unregelmäßigkeiten.

**Beispiele:**
- "Haben Sie Schwierigkeiten beim Wasserlassen?"
- "Wie oft müssen Sie nachts aufstehen, um Wasser zu lassen?"
- "Fühlen Sie Schmerzen oder Brennen beim Wasserlassen?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich muss jetzt mehrmals nachts aufstehen, um zu urinieren."
- **Arzt:** "Haben Sie auch ein brennendes Gefühl oder andere Beschwerden beim Wasserlassen?"

---
#### **Schritt 7: Schwindel (Schwindelgefühl, Benommenheit, Vertigo) erfragen**

Untersuchen Sie das Vorhandensein von Schwindel, um mögliche neurologische oder kardiovaskuläre Ursachen zu identifizieren.

**Anleitung:**
- Fragen Sie nach Häufigkeit und Umständen des Schwindels.
- Erkundigen Sie sich nach begleitenden Symptomen wie Übelkeit oder Kopfschmerzen.

**Beispiele:**
- "Haben Sie in letzter Zeit oft Schwindelgefühle?"
- "Wann tritt der Schwindel auf? Zum Beispiel beim Aufstehen oder nach dem Essen?"
- "Haben Sie neben dem Schwindel auch Kopfschmerzen oder Übelkeit bemerkt?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich fühle mich oft benommen, besonders wenn ich schnell aufstehe."
- **Arzt:** "Haben Sie bemerkt, ob der Schwindel mit bestimmten Aktivitäten oder Zeiten zusammenhängt?"

---
#### **Schritt 8: Bewusstsein (Aufmerksamkeit, Klarheit des Geistes) erfragen**

Erfahren Sie den Zustand des Bewusstseins des Patienten, um neurologische oder psychische Probleme zu identifizieren.

**Anleitung:**
- Fragen Sie nach der Klarheit des Geistes und der Aufmerksamkeitsspanne.
- Erkundigen Sie sich nach möglichen Beeinträchtigungen des Bewusstseins.

**Beispiele:**
- "Fühlen Sie sich wach und aufmerksam?"
- "Haben Sie Schwierigkeiten, sich zu konzentrieren?"
- "Gibt es Zeiten, in denen Sie sich benommen oder verwirrt fühlen?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich habe manchmal Schwierigkeiten, mich zu konzentrieren."
- **Arzt:** "Haben Sie in letzter Zeit viel Stress oder Schlafmangel erlebt?"

---
#### **Schritt 9: Schlafen (Schlaf, Ausruhen, Nachtisch liegen) erfragen**

Untersuchen Sie die Schlafgewohnheiten des Patienten, um Schlafstörungen oder andere gesundheitliche Probleme zu erkennen.

**Anleitung:**
- Fragen Sie nach der Schlafqualität und -dauer.
- Erkundigen Sie sich nach Schlafstörungen oder Unterbrechungen.

**Beispiele:**
- "Wie gut schlafen Sie in der Nacht?"
- "Haben Sie Schwierigkeiten einzuschlafen oder durchzuschlafen?"
- "Fühlen Sie sich morgens ausgeruht?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich schlafe oft unruhig und wache mehrmals in der Nacht auf."
- **Arzt:** "Haben Sie bemerkt, ob bestimmte Faktoren wie Stress oder körperliche Beschwerden Ihren Schlaf beeinflussen?"

---
#### **Schritt 10: Sexualanamnese (Sexualgeschichte) erfragen**

Erfahren Sie die Sexualgeschichte des Patienten, um geschlechtsspezifische Gesundheitsprobleme zu identifizieren.

**Anleitung:**
- Stellen Sie sensible Fragen respektvoll und diskret.
- Erkundigen Sie sich nach sexuellen Aktivitäten, Partnerschaften und möglichen Problemen.

**Beispiele:**
- "Sind Sie sexuell aktiv?"
- "Haben Sie in letzter Zeit Veränderungen in Ihrem Sexualleben bemerkt?"
- "Gibt es Probleme oder Beschwerden im Zusammenhang mit Ihrer Sexualität?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ja, ich bin sexuell aktiv und habe keine Beschwerden."
- **Arzt:** "Haben Sie in letzter Zeit Veränderungen bemerkt, die Ihre Sexualität beeinflussen könnten?"

---
#### **Schritt 11: Sonstiges (Weitere Fragen, Andere Beschwerden) erfragen**

Erfahren Sie zusätzliche Beschwerden oder Fragen des Patienten, die nicht in den vorherigen Kategorien abgedeckt wurden.

**Anleitung:**
- Bitten Sie den Patienten, alle weiteren Beschwerden oder Anliegen zu äußern.
- Stellen Sie sicher, dass keine relevanten Informationen übersehen werden.

**Beispiele:**
- "Gibt es noch andere Beschwerden, über die Sie sprechen möchten?"
- "Haben Sie Fragen oder Anliegen, die wir bisher nicht besprochen haben?"
- "Gibt es etwas anderes, das Ihnen auf dem Herzen liegt?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich habe auch gelegentlich Kopfschmerzen."
- **Arzt:** "Können Sie mir mehr über die Kopfschmerzen erzählen, wie häufig sie auftreten und wie stark sie sind?"

---
#### **Schritt 12: Gynäkologische Anamnese (nur für weibliche Patienten) erfragen**

Erfahren Sie die gynäkologische Anamnese, um frauenspezifische Gesundheitsprobleme zu identifizieren. Dieser Abschnitt ist nur für weibliche Patienten relevant.

**Anleitung:**
- Fragen Sie nach Menstruationszyklen, Schwangerschaften, Geburten und gynäkologischen Erkrankungen.
- Erkundigen Sie sich nach aktuellen oder früheren gynäkologischen Problemen.

**Beispiele:**
- "Wie lange dauert Ihr Menstruationszyklus?"
- "Haben Sie schon einmal schwanger gewesen?"
- "Hatten Sie in der Vergangenheit gynäkologische Erkrankungen wie Infektionen oder Zysten?"
- "Sind Sie momentan schwanger oder planen Sie eine Schwangerschaft?"

**Mögliche Antworten und Follow-ups:**
- **Patientin:** "Mein Menstruationszyklus ist regelmäßig und dauert etwa 28 Tage."
- **Arzt:** "Haben Sie schon einmal Schwangerschaften oder Geburtsschmerzen gehabt?"

---
### **Beispielgespräch für die Vegetative Anamnese**

**Arzt:** "Guten Tag, schön Sie kennenzulernen. Wie geht es Ihnen heute?"

**Patient:** "Mir geht es soweit gut, aber ich habe seit ein paar Tagen starke Bauchschmerzen."

**Arzt:** "Verstehe. Wie ist Ihr Appetit in letzter Zeit?"

**Patient:** "Mein Appetit ist ziemlich schlecht seit zwei Wochen."

**Arzt:** "Haben Sie bemerkt, dass Sie mehr oder weniger essen als sonst?"

**Patient:** "Ich esse viel weniger und habe kaum Hunger."

**Arzt:** "Haben Sie sich auch in letzter Zeit verändert? Zum Beispiel Gewicht verloren oder zugenommen?"

**Patient:** "Ja, ich habe in den letzten zwei Monaten etwa drei Kilo abgenommen."

**Arzt:** "Könnten Sie mir sagen, ob Sie sich oft übel fühlen oder ob Sie schon mal erbrechen mussten?"

**Patient:** "Ich fühle mich manchmal übel, aber ich habe nicht oft erbrechen müssen."

**Arzt:** "Wie oft haben Sie normalerweise Stuhlgang und haben sich Ihre Stuhlgewohnheiten verändert?"

**Patient:** "Ich habe normalerweise zweimal am Tag Stuhlgang, aber jetzt habe ich nur noch einmal oder manchmal gar keinen."

**Arzt:** "Haben Sie Schwierigkeiten beim Wasserlassen oder bemerken Sie Veränderungen dabei?"

**Patient:** "Nein, beim Wasserlassen geht alles normal."

**Arzt:** "Haben Sie in letzter Zeit Schwindelgefühle oder fühlen Sie sich benommen?"

**Patient:** "Gelegentlich fühle ich mich schwindelig, besonders wenn ich schnell aufstehe."

**Arzt:** "Wie gut schlafen Sie in der Nacht? Haben Sie Schwierigkeiten einzuschlafen oder durchzuschlafen?"

**Patient:** "Ich schlafe oft unruhig und wache mehrmals in der Nacht auf."

**Arzt:** "Sind Sie sexuell aktiv und haben Sie in letzter Zeit Veränderungen in Ihrem Sexualleben bemerkt?"

**Patient:** "Ja, ich bin sexuell aktiv und habe keine Veränderungen bemerkt."

**Arzt:** "Gibt es noch andere Beschwerden, über die Sie sprechen möchten?"

**Patient:** "Ja, ich habe auch gelegentlich Kopfschmerzen."

**Arzt:** "Vielen Dank, das hilft uns weiter. Lassen Sie uns nun eine genauere Untersuchung durchführen."

---
### **Zusätzliche Fragen zur Vertiefung**

**Zum Appetit:**
- "Haben Sie bestimmte Lebensmittel, die Sie jetzt lieber essen oder vermeiden?"
- "Fühlen Sie sich satt, auch wenn Sie wenig essen?"

**Zum Gewicht:**
- "Gab es Veränderungen in Ihrem Alltag, die Ihr Gewicht beeinflussen könnten, wie neue Diäten oder körperliche Aktivität?"
- "Wie lange haben Sie dieses Gewicht schon?"

**Zur Übelkeit:**
- "Haben Sie bemerkt, ob die Übelkeit nach bestimmten Aktivitäten oder Mahlzeiten auftritt?"
- "Benutzen Sie etwas, um die Übelkeit zu lindern?"

**Zum Erbrechen:**
- "Haben Sie Blut oder ungewöhnliche Substanzen beim Erbrechen bemerkt?"
- "Wann genau kam es zum letzten Mal vor?"

**Zum Stuhlgang:**
- "Haben Sie Schmerzen beim Stuhlgang?"
- "Haben Sie jemals Blut im Stuhl bemerkt?"

**Zum Wasserlassen:**
- "Haben Sie das Gefühl, dass Sie ständig Wasser lassen müssen?"
- "Haben Sie Veränderungen in der Farbe oder dem Geruch Ihres Urins bemerkt?"

**Zum Schwindel:**
- "Haben Sie neben dem Schwindel auch Kopfschmerzen oder Sehstörungen?"
- "Haben Sie einen bestimmten Auslöser für den Schwindel bemerkt?"

**Zum Bewusstsein:**
- "Haben Sie sich in letzter Zeit benommen gefühlt oder das Gefühl gehabt, dass Sie nicht klar denken können?"
- "Gibt es Zeiten, in denen Sie sich besonders bewusstlos fühlen?"

**Zum Schlafen:**
- "Nehmen Sie Schlafmittel oder andere Medikamente, die Ihren Schlaf beeinflussen könnten?"
- "Haben Sie ein festes Schlafmuster oder ändern sich Ihre Schlafzeiten oft?"

**Zur Sexualanamnese:**
- "Haben Sie in letzter Zeit Veränderungen in Ihrem Sexualtrieb bemerkt?"
- "Haben Sie Bedenken oder Fragen bezüglich Ihrer sexuellen Gesundheit?"

**Zu Sonstiges:**
- "Haben Sie irgendwelche Allergien, die wir wissen sollten?"
- "Gibt es andere gesundheitliche Probleme, die Sie momentan beschäftigen?"

**Zur Gynäkologischen Anamnese (nur für weibliche Patienten):**
- "Wie lange dauert Ihr Menstruationszyklus?"
- "Sind Sie schon einmal schwanger gewesen?"

---
### **Tipps zur Gesprächsführung**

1. **Freundlichkeit und Empathie:** Zeigen Sie Verständnis für die Beschwerden des Patienten und seien Sie einfühlsam.

   **Beispiel:**
   - "Es tut mir leid zu hören, dass Sie solche Schmerzen haben. Lassen Sie uns sehen, wie wir Ihnen helfen können."

2. **Klarheit und Einfachheit:** Verwenden Sie klare und einfache Sprache, um Missverständnisse zu vermeiden.

   **Beispiel:**
   - Statt "Sind Sie in der Lage, Ihre Schmerzen auf einer Skala von 1 bis 10 zu bewerten?" verwenden Sie "Wie stark sind Ihre Schmerzen von 1 bis 10?"

3. **Aktives Zuhören:** Bestätigen Sie das Gehörte durch Nicken oder kurze verbale Bestätigungen.

   **Beispiel:**
   - "Verstehe, die Schmerzen sind seit drei Tagen schlimmer geworden."

4. **Offene Fragen stellen:** Fördern Sie ausführliche Antworten durch offene Fragen.

   **Beispiel:**
   - "Können Sie mir mehr über Ihre Symptome erzählen?"

5. **Geduld haben:** Geben Sie dem Patienten genügend Zeit, um seine Antworten zu formulieren.

6. **Zusammenfassen und Bestätigen:** Wiederholen Sie wichtige Informationen, um Missverständnisse zu vermeiden.

   **Beispiel:**
   - "Also, wenn ich Sie richtig verstanden habe, haben Sie seit drei Tagen starke Bauchschmerzen, die sich auf der rechten Seite ausbreiten?"

7. **Anpassung an den Patienten:** Berücksichtigen Sie den sprachlichen Hintergrund und das Verständnisniveau des Patienten. Verwenden Sie einfache Sprache, falls nötig.

8. **Nonverbale Kommunikation:** Achten Sie auf Ihre Körpersprache. Lächeln, Augenkontakt und eine offene Haltung fördern das Vertrauen.

9. **Natürlicher Gesprächsfluss:** Vermeiden Sie starre Fragenfolgen. Passen Sie sich dem Gesprächsverlauf des Patienten an.

   **Beispiel:**
   - "Wie geht es Ihnen heute? Übrigens, bevor wir anfangen, könnten Sie mir bitte Ihren Appetit und Ihr Gewicht nennen?"

10. **Zeit nehmen:** Geben Sie dem Patienten genügend Zeit, um auf Fragen zu antworten, besonders wenn es um persönliche Informationen geht.

`,
  },
  zusammenfassung: {
    additionalInfo: `
### **Anamnese: Zusammenfassung**

#### **Zusammenfassung der Anamnese**

Nach der Erfassung der persönlichen Daten, des aktuellen Anamnese und des vegetativen Anamnese sollten Sie alle gesammelten Informationen zusammenfassen, um ein klares Bild des Patienten zu erhalten.

**Anleitung:**
- Fassen Sie die wesentlichen Punkte aus den vorherigen Abschnitten zusammen.
- Benennen Sie den Patienten mit Namen und Alter.
- Erläutern Sie den Hauptgrund des Besuchs und die wichtigsten Symptome.
- Geben Sie die Dauer der Beschwerden an.
- Verbinden Sie die vegetativen Symptome mit den aktuellen Beschwerden, falls relevant.

**Beispiele:**
- "Herr Schmidt, Sie sind 50 Jahre alt und haben sich wegen starker Rückenschmerzen vorgestellt. Diese Schmerzen bestehen seit drei Tagen und strahlen in Ihren Nacken aus."
- "Frau Müller, Sie sind 30 Jahre alt und klagen über Übelkeit und Gewichtsverlust seit zwei Wochen. Zusätzlich berichten Sie über unruhigen Schlaf und gelegentliche Kopfschmerzen."

**Mögliche Antworten und Follow-ups:**
- **Arzt:** "Also, Herr Schmidt, Sie sind 50 Jahre alt und haben seit drei Tagen starke Rückenschmerzen, die in Ihren Nacken ausstrahlen. Haben Sie noch weitere Symptome, die wir berücksichtigen sollten?"
- **Patient:** "Ja, ich fühle mich auch manchmal benommen."
- **Arzt:** "Verstehe, das ist wichtig zu wissen. Danke für die Informationen."

---
### **Tipps zur Gesprächsführung**

1. **Zusammenfassung einleiten:**
- "Also, um sicherzustellen, dass ich alles richtig verstanden habe..."

2. **Klar und präzise sein:**
- Vermeiden Sie unnötige Details, konzentrieren Sie sich auf die wesentlichen Punkte.

3. **Bestätigung einholen:**
- "Haben Sie das so auch erlebt?"

4. **Offen für Ergänzungen bleiben:**
- "Gibt es noch etwas, das Sie hinzufügen möchten?"

---
### **Beispielgespräch für die Zusammenfassung**

**Arzt:** "Also, Herr Schmidt, Sie sind 50 Jahre alt und haben sich wegen starker Rückenschmerzen vorgestellt. Diese Schmerzen bestehen seit drei Tagen und strahlen in Ihren Nacken aus. Haben Sie noch weitere Symptome, die wir berücksichtigen sollten?"

**Patient:** "Ja, ich fühle mich auch manchmal benommen."

**Arzt:** "Verstehe, das ist wichtig zu wissen. Danke für die Informationen. Lassen Sie uns nun eine genauere Untersuchung durchführen."

---
### **Zusätzliche Fragen zur Vertiefung**

**Zur Zusammenfassung der Symptome:**
- "Gibt es noch andere Beschwerden, die Sie erwähnen möchten?"
- "Haben Sie etwas bemerkt, das Ihre Symptome verschlimmert oder verbessert?"

**Zur Bestätigung:**
- "Habe ich alles richtig zusammengefasst, oder gibt es noch Ergänzungen?"
- "Gibt es etwas, das Sie noch hinzufügen möchten?"

**Zur Weiterführung:**
- "Basierend auf Ihren Angaben, lassen Sie uns die nächsten Schritte besprechen."
- "Wir werden nun eine genauere Untersuchung durchführen, um die Ursachen Ihrer Beschwerden zu ermitteln."




`,
  },
  vorerkrankungen: {
    additionalInfo: `
### **Anamnese: Vorerkrankungen**

#### **Einleitung zur Krankengeschichte**

Beginnen Sie die Erfassung der Vorerkrankungen mit einer freundlichen Einleitung, um das Vertrauen des Patienten zu gewinnen und eine offene Gesprächsatmosphäre zu schaffen.

**Anleitung:**
- Stellen Sie eine höfliche Einleitung, um den Patienten auf das Thema vorzubereiten.
- Erklären Sie kurz, warum die Vorerkrankungen wichtig sind.
- Ermutigen Sie den Patienten, offen über seine Gesundheitsgeschichte zu sprechen.

**Beispiele:**
- "Um Ihre aktuelle Gesundheit besser zu verstehen, möchte ich ein wenig über Ihre bisherigen gesundheitlichen Probleme sprechen."
- "Könnten Sie mir bitte von früheren Krankheiten oder gesundheitlichen Problemen erzählen, die Sie hatten?"
- "Es wäre hilfreich, wenn Sie mir Ihre bisherigen gesundheitlichen Vorerkrankungen schildern könnten."

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich hatte in der Vergangenheit Bluthochdruck."
- **Arzt:** "Verstehe, wie lange leiden Sie schon an Bluthochdruck und welche Maßnahmen haben Sie bisher ergriffen?"

---
#### **Chronische Erkrankungen**

Erfragen Sie chronische Erkrankungen des Patienten, um langfristige Gesundheitsprobleme zu identifizieren und die Behandlung entsprechend anzupassen.

**Anleitung:**
- Fragen Sie gezielt nach bestehenden chronischen Erkrankungen.
- Nutzen Sie eine klare und direkte Sprache.
- Achten Sie darauf, den Patienten nicht zu drängen, wenn er nicht sofort antwortet.

**Beispiele:**
- "Leiden Sie an chronischen Erkrankungen wie Diabetes oder Asthma?"
- "Haben Sie seit längerem gesundheitliche Probleme, die regelmäßig behandelt werden?"
- "Gibt es Erkrankungen, die Sie schon seit Jahren betreuen?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ja, ich habe Diabetes Typ 2."
- **Arzt:** "Wie lange haben Sie schon Diabetes und wie wird dieser derzeit behandelt?"

---
#### **Weitere relevante Erkrankungen**

Erweitern Sie die Krankengeschichte um weitere relevante Erkrankungen, die für die aktuelle Behandlung von Bedeutung sein könnten.

**Anleitung:**
- Fragen Sie nach weiteren Erkrankungen, die möglicherweise nicht chronisch sind, aber relevant sein könnten.
- Ermutigen Sie den Patienten, auch weniger offensichtliche Gesundheitsprobleme zu erwähnen.
- Stellen Sie sicher, dass der Patient versteht, dass alle Informationen wichtig sind.

**Beispiele:**
- "Gibt es noch andere gesundheitliche Probleme, die Sie derzeit betreuen oder in der Vergangenheit hatten?"
- "Hatten Sie in letzter Zeit gesundheitliche Probleme, die Sie uns mitteilen möchten?"
- "Gibt es Erkrankungen, die Sie hatten, aber bisher nicht erwähnt haben?"

**Mögliche Antworten und Follow-ups:**
- **Patient:** "Ich hatte vor zwei Jahren eine Lungenentzündung."
- **Arzt:** "Hatten Sie danach noch weitere Atemprobleme oder wurden Sie behandelt?"

---
### **Beispielgespräch für die Vorerkrankungen**

**Arzt:** "Um Ihre aktuelle Gesundheit besser zu verstehen, möchte ich ein wenig über Ihre bisherigen gesundheitlichen Probleme sprechen."

**Patient:** "Ich hatte in der Vergangenheit Bluthochdruck."

**Arzt:** "Verstehe, wie lange leiden Sie schon an Bluthochdruck und welche Maßnahmen haben Sie bisher ergriffen?"

**Patient:** "Seit fünf Jahren, ich nehme täglich blutdrucksenkende Medikamente."

**Arzt:** "Danke für die Information. Haben Sie noch andere chronische Erkrankungen?"

**Patient:** "Ja, ich leide auch an Diabetes Typ 2."

**Arzt:** "Wie lange haben Sie schon Diabetes und wie wird dieser derzeit behandelt?"

**Patient:** "Seit drei Jahren, ich verwende Insulin und kontrolliere regelmäßig meinen Blutzucker."

**Arzt:** "Gibt es noch andere gesundheitliche Probleme, die Sie derzeit betreuen oder in der Vergangenheit hatten?"

**Patient:** "Vor zwei Jahren hatte ich eine Lungenentzündung."

**Arzt:** "Hatten Sie danach noch weitere Atemprobleme oder wurden Sie behandelt?"

**Patient:** "Nein, seitdem geht es mir wieder gut."

**Arzt:** "Vielen Dank, das hilft uns weiter. Lassen Sie uns nun fortfahren."

---
### **Tipps zur Gesprächsführung**

1. **Freundlichkeit und Empathie:** Zeigen Sie Verständnis und Mitgefühl für die Vorerkrankungen des Patienten.
   
   **Beispiel:**
   - "Es tut mir leid zu hören, dass Sie unter Bluthochdruck und Diabetes leiden. Lassen Sie uns sehen, wie wir Ihre Gesundheit verbessern können."

2. **Klarheit und Einfachheit:** Verwenden Sie eine klare und einfache Sprache, um sicherzustellen, dass der Patient alles versteht.
   
   **Beispiel:**
   - Statt "Haben Sie eine hypertensive Erkrankung?" verwenden Sie "Haben Sie hohen Blutdruck?"

3. **Aktives Zuhören:** Bestätigen Sie das Gehörte durch kurze verbale Bestätigungen oder Nicken.
   
   **Beispiel:**
   - "Verstehe, Sie nehmen seit fünf Jahren Medikamente gegen Bluthochdruck."

4. **Offene Fragen stellen:** Fördern Sie ausführliche Antworten durch offene Fragen.
   
   **Beispiel:**
   - "Können Sie mir mehr über Ihre Diabetesbehandlung erzählen?"

5. **Geduld haben:** Geben Sie dem Patienten genügend Zeit, um über seine Vorerkrankungen zu sprechen.

6. **Zusammenfassen und Bestätigen:** Wiederholen Sie die wichtigen Punkte, um Missverständnisse zu vermeiden.
   
   **Beispiel:**
   - "Also, Sie haben seit fünf Jahren Bluthochdruck und seit drei Jahren Diabetes Typ 2, richtig?"

7. **Anpassung an den Patienten:** Passen Sie Ihre Fragen und Erklärungen an das Verständnisniveau des Patienten an.

8. **Nonverbale Kommunikation:** Achten Sie auf Ihre Körpersprache, um eine unterstützende Atmosphäre zu schaffen.

9. **Natürlicher Gesprächsfluss:** Lassen Sie das Gespräch organisch verlaufen und vermeiden Sie starre Fragenfolgen.
   
   **Beispiel:**
   - "Nachdem wir Ihre Vorerkrankungen besprochen haben, lassen Sie uns nun zu Ihrer aktuellen Beschwerden übergehen."

10. **Zeit nehmen:** Nehmen Sie sich die nötige Zeit, um alle relevanten Informationen zu sammeln, ohne den Patienten zu hetzen.

---
### **Zusätzliche Beispielsätze für den Umgang mit den Vorerkrankungen**

- **Einleitung zur Krankengeschichte:**
  - "Um ein vollständiges Bild Ihrer Gesundheit zu bekommen, möchte ich etwas über Ihre bisherigen Krankheiten erfahren."
  - "Es wäre hilfreich, wenn Sie mir von Ihren früheren gesundheitlichen Problemen erzählen könnten."

- **Chronische Erkrankungen:**
  - "Leiden Sie an langfristigen Krankheiten wie Diabetes oder Asthma?"
  - "Gibt es Erkrankungen, die Sie seit vielen Jahren betreuen?"

- **Weitere relevante Erkrankungen:**
  - "Hatten Sie noch andere gesundheitliche Probleme, die wir berücksichtigen sollten?"
  - "Gibt es Krankheiten in Ihrer Vergangenheit, die für Ihre aktuelle Behandlung wichtig sein könnten?"

---
    `,
  },
  previousOperations: {
    additionalInfo: `
  ### **Frühere Operationen**
  
  Fragen Sie den Patienten nach Operationen, die in der Vergangenheit durchgeführt wurden. Dies ist wichtig, um mögliche langfristige Auswirkungen oder Komplikationen zu erkennen, die die aktuelle Gesundheit beeinflussen könnten.
  
  **Anleitung:**
  
  • Erfragen Sie alle relevanten Operationen, unabhängig davon, ob sie kürzlich oder vor Jahren durchgeführt wurden.
  
  • Achten Sie darauf, den Patienten nicht zu drängen, sondern ihm die Möglichkeit zu geben, ausführlich zu antworten.
  
  **Beispiele:**
  
  • "Hatten Sie in der Vergangenheit irgendwelche Operationen?"
  
  • "Könnten Sie mir bitte eine Liste der wichtigsten Operationen geben, die Sie hatten?"
  
  • "Gab es in Ihrer medizinischen Vorgeschichte Eingriffe, die für Ihre aktuelle Gesundheit von Bedeutung sein könnten?"
  
  **Mögliche Antworten und Follow-ups:**
  
  • Patient: "Ich hatte vor einigen Jahren eine Gallenkolik-Operation."
  
  • Arzt: "Was war der genaue Grund für diese Operation und wie ging es Ihnen danach?"
  
  ---
  
  ### **Operationsverlauf und Komplikationen**
  
  Fragen Sie nach dem Verlauf der Operationen und ob es nach den Eingriffen Komplikationen oder ungewöhnliche Reaktionen gab. Dies hilft, mögliche Risiken für zukünftige Behandlungen oder Operationen zu erkennen.
  
  **Anleitung:**
  
  • Erkundigen Sie sich nach möglichen Komplikationen während oder nach der Operation.
  
  • Fragen Sie, ob der Patient nach der Operation besondere Pflege benötigt oder hatte.
  
  **Beispiele:**
  
  • "Gab es nach den Operationen Komplikationen oder Probleme?"
  
  • "Wurde nach der Operation eine spezielle Nachbehandlung durchgeführt?"
  
  • "Konnte die Operation ohne Probleme abgeschlossen werden?"
  
  **Mögliche Antworten und Follow-ups:**
  
  • Patient: "Nach der Operation hatte ich einige Infektionen, aber die Heilung verlief schließlich gut."
  
  • Arzt: "Welche Behandlung haben Sie nach der Operation erhalten, und gab es noch andere Auswirkungen?"
  
  ---
  
  ### **Dauer des Krankenhausaufenthalts**
  
  Ermitteln Sie, wie lange der Patient nach der Operation im Krankenhaus bleiben musste, da dies Aufschluss über die Schwere der Operation und die Genesung gibt.
  
  **Anleitung:**
  
  • Fragen Sie nach der Dauer des Krankenhausaufenthalts nach der Operation, um den Schweregrad und den Heilungsprozess abzuschätzen.
  
  • Achten Sie auf Hinweise zu postoperativen Komplikationen, die die Krankenhausaufenthaltsdauer verlängert haben könnten.
  
  **Beispiele:**
  
  • "Wie lange mussten Sie nach der Operation im Krankenhaus bleiben?"
  
  • "Gab es besondere Gründe für eine längere Krankenhausaufenthaltsdauer?"
  
  **Mögliche Antworten und Follow-ups:**
  
  • Patient: "Ich war nach der Operation insgesamt zwei Wochen im Krankenhaus."
  
  • Arzt: "War das aufgrund von Komplikationen oder war es eine reguläre Erholungszeit?"
  
  ---
  
  ### **Beispielgespräch für Frühere Operationen**
  
  Arzt: "Könnten Sie mir bitte von früheren Operationen berichten, die Sie hatten?"
  
  Patient: "Ich hatte vor einigen Jahren eine Gallenkolik-Operation."
  
  Arzt: "Was war der genaue Grund für diese Operation und wie ging es Ihnen danach?"
  
  Patient: "Ich hatte starke Bauchschmerzen und es wurde eine Notoperation durchgeführt. Nach der Operation gab es einige Infektionen, aber sie haben mich behandelt, und die Heilung verlief schließlich gut."
  
  Arzt: "Gab es nach der Operation Komplikationen oder besondere Nachbehandlungen?"
  
  Patient: "Ja, ich musste noch einige Zeit Antibiotika nehmen, aber sonst verlief alles gut."
  
  Arzt: "Wie lange mussten Sie im Krankenhaus bleiben?"
  
  Patient: "Insgesamt war ich zwei Wochen dort."
  
  Arzt: "War das aufgrund von Komplikationen oder war es eine reguläre Erholungszeit?"
  
  Patient: "Es war eher eine reguläre Erholungszeit, aber die Ärzte wollten sicherstellen, dass keine weiteren Probleme auftauchen."
  
  ---
  
  ### **Tipps zur Gesprächsführung**
  
  1. **Freundlichkeit und Empathie:** Zeigen Sie Verständnis und Sensibilität für vergangene Operationen und eventuelle Komplikationen.
     Beispiel: "Ich verstehe, dass Operationen eine große Belastung sein können. Wir werden dafür sorgen, dass alles gut verläuft."
  
  2. **Klarheit und Einfachheit:** Verwenden Sie eine klare Sprache und bitten Sie den Patienten, Details zu nennen.
     Beispiel: "Könnten Sie mir genau sagen, was bei dieser Operation passiert ist?"
  
  3. **Aktives Zuhören:** Bestätigen Sie, was der Patient gesagt hat, um Vertrauen aufzubauen.
     Beispiel: "Verstehe, Sie hatten nach der Operation einige Infektionen. Lassen Sie uns sehen, wie wir Sie unterstützen können."
  
  4. **Offene Fragen stellen:** Stellen Sie Fragen, die dem Patienten die Möglichkeit geben, mehr zu erzählen.
     Beispiel: "Gab es noch andere Herausforderungen oder Komplikationen nach der Operation?"
  
  5. **Geduld haben:** Geben Sie dem Patienten genügend Zeit, um seine Geschichte zu erzählen, ohne ihn zu unterbrechen.
  
  6. **Zusammenfassen und Bestätigen:** Wiederholen Sie die wichtigen Punkte, um Missverständnisse zu vermeiden.
     Beispiel: "Also, nach der Operation mussten Sie zwei Wochen im Krankenhaus bleiben, und es gab einige Infektionen, die behandelt wurden, richtig?"
    `,
  },
  medications: {
    additionalInfo: `
    ### **Medikamente**
  
    #### **Allgemeine Medikamenteneinnahme**
    Fragen Sie den Patienten nach allen aktuell eingenommenen Medikamenten, um ein umfassendes Bild der medikamentösen Behandlung und möglicher Wechselwirkungen zu erhalten.
  
    **Anleitung:**
    • Erfragen Sie, ob der Patient regelmäßig Medikamente einnimmt.
    • Achten Sie darauf, sowohl rezeptpflichtige als auch frei verkäufliche Medikamente zu berücksichtigen.
    • Fragen Sie nach der Häufigkeit der Einnahme und dem Zweck der Medikation.
  
    **Beispiele:**
    • "Nehmen Sie derzeit regelmäßig Medikamente ein?"
    • "Welche Medikamente nehmen Sie täglich?"
    • "Gibt es Medikamente, die Sie gelegentlich einnehmen, wie zum Beispiel Schmerzmittel oder Nahrungsergänzungsmittel?"
  
    **Mögliche Antworten und Follow-ups:**
    • Patient: "Ja, ich nehme täglich Blutdruckmedikamente."
    • Arzt: "Welche Medikamente genau nehmen Sie zur Blutdrucksenkung, und in welcher Dosierung?"
  
    ---
  
    #### **Detaillierte Medikamenteninformationen**
    Fragen Sie nach spezifischen Informationen zu den einzelnen Medikamenten, die der Patient einnimmt, um die korrekte Anwendung und mögliche Nebenwirkungen oder Wechselwirkungen zu verstehen.
  
    **Anleitung:**
    • Erkundigen Sie sich nach den spezifischen Medikamenten, einschließlich Namen, Dosierung, Häufigkeit und Behandlungsdauer.
    • Fragen Sie nach möglichen Nebenwirkungen oder früheren Reaktionen auf Medikamente.
    • Achten Sie darauf, die Patienten zu fragen, ob sie neue Medikamente verschrieben bekommen haben oder ob es Änderungen in der Medikation gab.
  
    **Beispiele:**
    • "Könnten Sie mir bitte die Namen der Medikamente nennen, die Sie aktuell einnehmen?"
    • "Wie oft müssen Sie diese Medikamente einnehmen, und in welcher Dosis?"
    • "Haben Sie irgendwelche Nebenwirkungen bemerkt, seitdem Sie diese Medikamente einnehmen?"
    • "Gab es kürzlich Änderungen in Ihrer Medikation?"
  
    **Mögliche Antworten und Follow-ups:**
    • Patient: "Ich nehme 5 mg Ramipril einmal täglich."
    • Arzt: "Haben Sie in der letzten Zeit irgendwelche Nebenwirkungen wie Schwindel oder Husten bemerkt, die mit Ramipril in Verbindung stehen könnten?"
    • Patient: "Nein, bisher hatte ich keine Beschwerden mit diesem Medikament."
  
    ---
  
    #### **Beispielgespräch für Medikamente**
    Arzt: "Nehmen Sie derzeit regelmäßig Medikamente ein?"
    Patient: "Ja, ich nehme jeden Tag Medikamente gegen Bluthochdruck und auch gelegentlich Schmerzmittel."
    Arzt: "Welche Medikamente nehmen Sie zur Blutdrucksenkung?"
    Patient: "Ich nehme 5 mg Ramipril täglich."
    Arzt: "Haben Sie in letzter Zeit Nebenwirkungen bemerkt, wie Schwindel oder Husten?"
    Patient: "Nein, alles ist gut."
    Arzt: "Welche Schmerzmittel nehmen Sie gelegentlich?"
    Patient: "Ich nehme Ibuprofen bei Kopf- oder Rückenschmerzen."
    Arzt: "Wie häufig nehmen Sie Ibuprofen und in welcher Dosis?"
    Patient: "Meistens einmal täglich bei Bedarf, 400 mg."
  
    #### **Tipps zur Gesprächsführung:**
    1. **Freundlichkeit und Empathie:** Zeigen Sie Verständnis für die Medikamentengeschichte des Patienten. Beispiel: "Es ist gut, dass Sie Ihre Medikamente regelmäßig einnehmen. Wir müssen sicherstellen, dass alles gut zusammenpasst."
    2. **Klarheit und Einfachheit:** Verwenden Sie einfache Sprache, um sicherzustellen, dass der Patient die Fragen versteht. Beispiel: "Nehmen Sie ein Medikament für Ihren Blutdruck? Wie heißt es?"
    3. **Aktives Zuhören:** Bestätigen Sie die Informationen, die der Patient gibt, und stellen Sie gegebenenfalls Nachfragen. Beispiel: "Verstehe, Sie nehmen Ramipril. Wie geht es Ihnen damit?"
    4. **Offene Fragen stellen:** Ermutigen Sie den Patienten, alle Medikamente zu nennen, die er einnimmt, auch Nahrungsergänzungsmittel. Beispiel: "Gibt es noch andere Medikamente oder Ergänzungsmittel, die Sie nehmen?"
    5. **Geduld haben:** Geben Sie dem Patienten genügend Zeit, um alle Medikamente zu nennen, die er einnimmt.
    6. **Zusammenfassen und Bestätigen:** Wiederholen Sie wichtige Punkte, um sicherzustellen, dass Sie alles richtig verstanden haben. Beispiel: "Also, Sie nehmen Ramipril 5 mg täglich und gelegentlich Ibuprofen 400 mg, korrekt?"
    `,
  },

  allergiesAndIntolerances: {
    additionalInfo: ` `,
  },

  noxen: {
    additionalInfo: ` `,
  },

  familienanamnese: {
    additionalInfo: `
  ### **Relevante familiäre Krankheiten**
  
  #### **Eltern**
  Fragen Sie nach Erkrankungen, die bei den Eltern des Patienten bekannt sind, da viele gesundheitliche Probleme genetisch bedingt oder familiär gehäuft auftreten können. Dies hilft, mögliche Risikofaktoren für den Patienten zu erkennen.
  
  **Anleitung:**
  • Erkundigen Sie sich nach bekannten Erkrankungen bei den Eltern des Patienten.
  • Achten Sie auf häufige Erkrankungen wie Herz-Kreislauf-Erkrankungen, Krebs, Diabetes oder neurodegenerative Erkrankungen.
  
  **Beispiele:**
  • "Hatten Ihre Eltern bekannte Erkrankungen, die für Ihre Gesundheit relevant sein könnten?"
  • "Leiden Ihre Eltern an chronischen Krankheiten wie Diabetes, Bluthochdruck oder Herzkrankheiten?"
  • "Gab es in Ihrer Familie Fälle von Krebs oder anderen genetischen Erkrankungen?"
  
  **Mögliche Antworten und Follow-ups:**
  • Patient: "Mein Vater hatte Herzkrankheiten, und meine Mutter hatte Diabetes."
  • Arzt: "Wie alt waren Ihre Eltern, als sie an diesen Erkrankungen litten, und welche Behandlung haben sie erhalten?"
  
  #### **Geschwister**
  Fragen Sie nach gesundheitlichen Problemen bei den Geschwistern des Patienten, da auch hier genetische Faktoren oder familiäre Gesundheitsmuster eine Rolle spielen können. Die Krankengeschichte der Geschwister kann Aufschluss über familiäre Häufungen von Erkrankungen geben.
  
  **Anleitung:**
  • Erkundigen Sie sich nach bekannten Erkrankungen oder gesundheitlichen Problemen bei den Geschwistern des Patienten.
  • Achten Sie auf familiär gehäufte Erkrankungen, die möglicherweise auch den Patienten betreffen könnten.
  
  **Beispiele:**
  • "Haben Ihre Geschwister gesundheitliche Probleme oder bekannte Erkrankungen?"
  • "Gibt es bei Ihren Geschwistern ähnliche Erkrankungen wie bei Ihnen oder Ihren Eltern?"
  • "Leiden Ihre Geschwister an chronischen Krankheiten wie Asthma, Arthritis oder Krebs?"
  
  **Mögliche Antworten und Follow-ups:**
  • Patient: "Mein Bruder hat Asthma, und meine Schwester leidet an Migräne."
  • Arzt: "Gibt es in Ihrer Familie andere gesundheitliche Probleme, die auffällig sind, oder Krankheiten, die vererbt werden können?"
  
  #### **Genetische Erkrankungen**
  Ermitteln Sie, ob es genetische Erkrankungen in der Familie gibt, die für den Patienten von Bedeutung sein könnten. Bestimmte Erkrankungen, wie etwa erbliche Krebsarten oder Stoffwechselstörungen, können familiär gehäuft auftreten.
  
  **Anleitung:**
  • Fragen Sie nach bekannten genetischen Erkrankungen in der Familie, die beim Patienten ein erhöhtes Risiko für ähnliche Erkrankungen darstellen könnten.
  • Achten Sie auf Hinweise auf erblich bedingte Krankheiten, die eine Rolle in der Krankheitsgeschichte des Patienten spielen könnten.
  
  **Beispiele:**
  • "Gibt es in Ihrer Familie bekannte genetische Erkrankungen, wie zum Beispiel Huntington, Mukoviszidose oder Hämophilie?"
  • "Haben andere Familienmitglieder in jüngeren Jahren schwere Erkrankungen wie Krebs oder Herzkrankheiten entwickelt?"
  • "Leiden mehrere Familienmitglieder an den gleichen Erkrankungen, die genetische Ursachen haben könnten?"
  
  **Mögliche Antworten und Follow-ups:**
  • Patient: "In meiner Familie gibt es Fälle von Brustkrebs, die bei mehreren Frauen aufgetreten sind."
  • Arzt: "Wie alt waren die betroffenen Familienmitglieder, und gab es dabei spezielle Erbkrankheiten oder bekannte Risikofaktoren?"
  
  #### **Beispielgespräch für relevante familiäre Krankheiten**
  Arzt: "Hatten Ihre Eltern bekannte Erkrankungen, die für Ihre Gesundheit relevant sein könnten?"
  Patient: "Ja, mein Vater hatte Herzkrankheiten, und meine Mutter hatte Diabetes."
  Arzt: "Wie alt waren Ihre Eltern, als sie an diesen Erkrankungen litten, und welche Behandlung haben sie erhalten?"
  Patient: "Mein Vater bekam mit 50 Jahren einen Herzinfarkt und starb mit 65 Jahren. Meine Mutter hat seit ihren 60ern Diabetes und nimmt Medikamente dagegen."
  Arzt: "Haben Ihre Geschwister gesundheitliche Probleme oder bekannte Erkrankungen?"
  Patient: "Ja, mein Bruder hat Asthma, und meine Schwester leidet an Migräne."
  Arzt: "Gibt es in Ihrer Familie andere gesundheitliche Probleme oder Krankheiten, die vererbt werden können?"
  Patient: "Ja, in der Familie meiner Mutter gab es Fälle von Brustkrebs bei mehreren Frauen."
  Arzt: "Das ist wichtig zu wissen, wir können Ihre Risikofaktoren besser einschätzen und entsprechende Vorsorgemaßnahmen einleiten."
  
  #### **Tipps zur Gesprächsführung**
  1. **Freundlichkeit und Empathie:** Zeigen Sie Verständnis für die familiären gesundheitlichen Herausforderungen und sensibilisieren Sie den Patienten für die Bedeutung dieser Informationen. Beispiel: "Es ist wichtig, diese Informationen zu teilen, damit wir Ihre gesundheitlichen Risiken besser verstehen."
  2. **Klarheit und Einfachheit:** Verwenden Sie eine klare Sprache, um sicherzustellen, dass der Patient versteht, warum diese Informationen wichtig sind. Beispiel: "Könnten Sie mir erzählen, ob in Ihrer Familie Krankheiten auftreten, die vererbt werden könnten?"
  3. **Aktives Zuhören:** Bestätigen Sie die Antworten des Patienten und stellen Sie gegebenenfalls gezielte Nachfragen. Beispiel: "Verstehe, Ihre Mutter hatte Diabetes. Gab es bei ihr auch andere gesundheitliche Probleme, die für uns relevant sein könnten?"
  4. **Offene Fragen stellen:** Fördern Sie den Patienten, mehr über die gesundheitlichen Geschichten der Familienmitglieder zu erzählen. Beispiel: "Gab es noch andere ernsthafte Erkrankungen in Ihrer Familie, die wir kennen sollten?"
  5. **Geduld haben:** Geben Sie dem Patienten ausreichend Zeit, um die relevanten familiären Gesundheitsinformationen zu teilen.
  6. **Zusammenfassen und Bestätigen:** Wiederholen Sie die wichtigen Punkte, um sicherzustellen, dass Sie alles richtig verstanden haben. Beispiel: "Also, Ihr Vater hatte Herzkrankheiten, und Ihre Mutter hat Diabetes. Ihre Geschwister haben Asthma und Migräne. Haben Sie noch weitere familiäre Gesundheitsinformationen?"
    `,
  },

  sozialanamnese: {
    additionalInfo: ` `,
  },

  preliminaryDiagnosis: {
    additionalInfo: ` Попередній діагноз `,
  },
  differentialDiagnosis: {
    additionalInfo: `
### **Диференційний діагноз**

#### **Основна інформація**
- Перелік можливих діагнозів.
- Відмінності між ними.
- Необхідні додаткові дослідження.
- Ймовірність кожного діагнозу.

**Приклади:**
- **Можливі діагнози:** Грип, ангіна, COVID-19.
- **Відмінності:** Симптоматика, дані лабораторних аналізів.
- **Необхідні дослідження:** Тест ПЛР, загальний аналіз крові.
- **Ймовірність:** Висока, середня, низька.

---
**Рекомендації для клінічного аналізу:**
- Використовуйте послідовний підхід для виключення малоймовірних діагнозів.
- Запишіть всі діагностичні результати.
    `,
  },

  button: {
    selectDataSource: "Вибрати джерело даних",
  },
};

export default FSPFormularPageData;
