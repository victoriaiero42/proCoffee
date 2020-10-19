import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';

export default function ReadText() {
  const [text, setText] = useState('');
  const [resultFetch, setResultFetch] = useState('');


  const worker = createWorker({
    logger: (data) => console.log(data)
  });

  async function recognize(file, lang, worker) {
    await worker.load();
    await worker.loadLanguage(lang);
    await worker.initialize(lang);
    const { data: { text } } = await worker.recognize(file);
    setText(text);
    console.log(text);
    await worker.terminate();
    const resp = await fetch('/readText', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({
        text,
      }),
    })
    const response = await resp.json();
    return setResultFetch(response.newArray);
  }
  function result(event) {
    recognize(event.target.files[0], 'rus', worker);
  };
  console.log(resultFetch);

  return (
    <div>
      <input type="file" onChange={result} />

      {resultFetch && resultFetch.map((el) => {
        return (
          <>
            <div>
              Название кофе:
              &nbsp;
              {el.title}
              &nbsp;
              <br />
           Описание:
              &nbsp;
           {el.description}
              <br />
            Регион:
            &nbsp;
            {el.region}
            </div>
          </>
        );
      })}
    </div>
  );
};
