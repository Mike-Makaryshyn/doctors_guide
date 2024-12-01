import React from 'react';
import allPagesData from '../constants/trafarettes'; // Підключення масиву даних

const LinksPage = () => {
  const pageNames = allPagesData.map((page) => {
    const pagePath = page.default ? page.default : page; // Перевірка на експорт за замовчуванням
    return {
      name: pagePath.toString().split('/').pop(), // Назва сторінки (ім'я файлу)
      path: pagePath, // Шлях до сторінки
    };
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Список сторінок</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pageNames.map((page, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <a
              href={page.path}
              style={{
                textDecoration: 'none',
                color: 'blue',
                fontWeight: 'bold',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksPage;