import React, { useState } from 'react';

export default function DragAndDrop() {
  const [cardList, setCardList] = useState([
    { id: 1, order: 3, text: 'item 3' },
    { id: 2, order: 5, text: 'item 5' },
    { id: 3, order: 7, text: 'item 7' },
    { id: 4, order: 8, text: 'item 8' },
    { id: 5, order: 10, text: 'item 10' },
    { id: 6, order: 4, text: 'item 4' },
    { id: 7, order: 6, text: 'item 6' },
    { id: 8, order: 1, text: 'item 1' },
    { id: 9, order: 9, text: 'item 9' },
    { id: 10, order: 2, text: 'item 2' },
  ]);
  const [currentCard, setCurrentCard] = useState(null);

  function dragStartHandler(e, elem) {
    setCurrentCard(elem);
  }

  function dragEndHandler(e) {
    e.target.style.background = 'white';
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'lightgray';
  }

  function dropHandler(e, elem) {
    e.preventDefault();
    setCardList(cardList.map((el) => {
      if (el.id === elem.id) {
        return { ...el, order: currentCard.order };
      }
      if (el.id === currentCard.id) {
        return { ...el, order: elem.order };
      }
      return el;
    }));
    e.target.style.background = 'white';
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    return -1;
  };
  return (
    <div>
      {cardList.sort(sortCards).map((elem) => (
        <div
          key={elem.id}
          onDragStart={(e) => dragStartHandler(e, elem)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, elem)}
          draggable
          className="card"
        >
          {elem.text}
        </div>
      ))}
    </div>
  );
}
