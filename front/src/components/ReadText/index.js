import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';

export default function ReadText() {

  const [text, setText] = useState('');

  const worker = createWorker({
    logger: (data) => console.log(data)
  });

  async function recognize(file, lang, worker) {
    await worker.load();
    await worker.loadLanguage(lang);
    await worker.initialize(lang);
    const { data: { text } } = await worker.recognize(file);
    setText(text)
    await worker.terminate();
    return text;
  }

  function result(event) {
    recognize(event.target.files[0], 'rus', worker)
  }


  return (
    <div>
      {/* <!-- инпут для загрузки файла изображения --> */}
      <input type="file" onChange={result} />


      <div > Название кофе: {text.replace(/[^a-zA-ZА-Яа-я0-9\s]/ig, '\n').slice(4, 37)
      }</div>

    </div>
  )
}
