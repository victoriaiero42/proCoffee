import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';

export default function ReadText() {

  const [text, setText] = useState('');
  const [loading, setLoading] = useState('');

  const worker = createWorker({
    logger: (data) => setLoading(data)
  });

  async function recognize(file, lang, worker) {
    await worker.load();
    await worker.loadLanguage(lang);
    await worker.initialize(lang);
    const { data: { text } } = await worker.recognize(file);
    console.log(text);
    setText(text)
    await worker.terminate();
    return text;
  }
  console.log(text.length);
  function result(event) {
    recognize(event.target.files[0], 'rus', worker)
  }


  return (
    <div>
      {/* <!-- инпут для загрузки файла изображения --> */}
      <input type="file" onChange={result} />
      {text.length === 0 ? <p>loading...</p> : <div > Название кофе: {text.replace(/[^a-zA-ZА-Яа-я0-9\s]/ig, '\n').slice(4, 37)
      }</div>}
    </div>
  )
}
