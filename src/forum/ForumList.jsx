// src/forum/ForumList.jsx
import React from "react";
import { useThreads } from "../hooks/useThreads";

const ForumList = () => {
  const { threads, loading, error } = useThreads();

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <div>
      <h2>Форум</h2>
      <button onClick={() => window.location.reload()}>🔄 Оновити</button>
      <ul>
        {threads.map(thread => (
          <li key={thread.id}>
            <h3>{thread.title}</h3>
            <p>{thread.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumList;