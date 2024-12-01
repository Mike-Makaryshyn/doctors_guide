import React, { useRef } from 'react';
import styles from'./styles.module.scss';

function ApprobationPage() {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const step5Ref = useRef(null);
  const step6Ref = useRef(null);

  const scrollToStep = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header>
        <h1>Ваш шлях до отримання апробації</h1>
        <p>Слідуйте цьому плану, щоб успішно отримати апробацію.</p>
      </header>

      <div className={styles.progress_bar}>
        <div onClick={() => scrollToStep(step1Ref)}>Вивчення мови</div>
        <div onClick={() => scrollToStep(step2Ref)}>Підготовка документів</div>
        <div onClick={() => scrollToStep(step3Ref)}>Фаховий мовний іспит</div>
        <div onClick={() => scrollToStep(step4Ref)}>Робота/Стажування</div>
        <div onClick={() => scrollToStep(step5Ref)}>Іспит на знання</div>
        <div onClick={() => scrollToStep(step6Ref)}>Апробація</div>
      </div>

      <section id="step1" ref={step1Ref}>
        <h2>Крок 1: Вивчення мови до рівня C1</h2>
        <p>Чому рівень C1 важливий:</p>
        <p>Досягнення рівня C1 є вирішальним, оскільки це забезпечує необхідну мовну компетенцію для успішного складання фахового мовного іспиту (FSP) та комфортного проживання і роботи в Німеччині.</p>

        <p>Рекомендовані мовні курси:</p>
        <ul className="resources">
          <li><a href="https://www.goethe.de/de/spr/kup/kur/gia.html" target="_blank" rel="noopener noreferrer">Goethe-Institut</a></li>
          <li><a href="https://www.telc.net/de.html" target="_blank" rel="noopener noreferrer">TELC</a></li>
        </ul>

        <p>Інтерактивні вправи та додатки:</p>
        <ul className="resources">
          <li><a href="https://www.duolingo.com/" target="_blank" rel="noopener noreferrer">Duolingo</a></li>
          <li><a href="https://www.babbel.com/" target="_blank" rel="noopener noreferrer">Babbel</a></li>
        </ul>

        <div>
          <label htmlFor="progress">Трекер прогресу:</label>
          <select id="progress" name="progress">
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
          </select>
        </div>
      </section>

      <section id="step2" ref={step2Ref}>
        <h2>Крок 2: Підготовка документів</h2>
        <p>Важливо ретельно підготувати всі необхідні документи для успішної подачі заяви на апробацію. Ось кроки, які слід виконати:</p>

        <ol className="resources">
          <li>Збір документів</li>
          <li>Отримання апостиля</li>
          <li>Нотаріальне завірення</li>
          <li>Переклад документів</li>
          <li>Подача заяви на апробацію</li>
          <li>Підготовка документів до відправки</li>
          <li>Відправка документів</li>
        </ol>

        <p>На нашому сайті ви знайдете всі кроки та детальну інформацію про необхідні документи.</p>

        <p>Додатково ми пропонуємо такі інструменти:</p>
        <ul className="resources">
          <li>Резюме-шаблон: проста форма без стилю, яку ви можете налаштувати.</li>
          <li>Шаблон заяви: повний шаблон для вашого мотиваційного листа.</li>
        </ul>
      </section>

      {/* Додайте інші секції аналогічно */}

      <footer>
        <p>Контакт: <a href="mailto:info@approbation-weg.de">info@approbation-weg.de</a> | Телефон: 123-456-7890</p>
        <p>&copy; 2024 Ваш шлях до отримання апробації</p>
      </footer>
    </div>
  );
}

export default ApprobationPage;