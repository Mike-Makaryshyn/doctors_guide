import React from "react";
import all_pages_data from "../../constants/trafarettes/index"; // Імпортуємо сторінки

const LinksPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Links Page</h1>
      <p>Here is a list of all available pages:</p>
      {all_pages_data?.map((page, idx) => 
            <div key={page?.path}>
               <ul>
                  <li>
                  <div>{page?.folder }</div>
                     <a href={`/trafarette/${page?.path}`}>{page?.content?.[0]?.title || 'no title'}</a>

                  </li>
               </ul>
            </div>
         )}
    </div>
  );
};

export default LinksPage;