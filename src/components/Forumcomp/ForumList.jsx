// doctors_guide/src/components/Forumcomp/ForumList.jsx

import React from "react";
import { useThreads } from "../../hooks/forumhooks/useThreads";

const ForumList = () => {
  const { threads, loading, error } = useThreads();

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Форум</h2>
      <button onClick={() => window.location.reload()}>🔄 Оновити</button>

      <ul>
        {threads.map(thread => (
          <li key={thread.id} style={{ marginTop: "1rem" }}>
            <h3>{thread.title}</h3>
            <p>{thread.description}</p>
            {/* Якщо треба більше полів, додавай */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumList;