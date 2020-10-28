import React, { useState, useEffect, memo } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
// import { startRatingSaga } from '../../redux/actions/ratingActions';
import { startCoffeeItemsSaga } from '../../redux/actions/allItemsActions';
import { startRewriteUser } from '../../redux/actions/authActions';
import { setChangeStatus } from '../../redux/actions/allItemsActions';

function Raiting({ id }) {
  const [rating, setRaiting] = useState('');
  const dispatch = useDispatch()
  const [input] = useState({ id, rating });

  async function handleRaiting(e) {
    const numrate = Number(rating);
    setRaiting(e.target.value)
    const response = await fetch("/raiting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        rate: e.target.value
      })
    });
    const rate = await response.json()
    console.log(rate);
    dispatch(setChangeStatus(rate))
    // const resave1 = await fetch('/user');
    // const res11 = await resave1.json();
    // console.log(123);

    // console.log(res11, 'tut');
    // dispatch(startRewriteUser(res11))


  }
  // setRaiting(rate)

  // async function handleRate() {
  //   const resave1 = await fetch('/user');
  //   const res11 = await resave1.json();
  //   console.log(res11, 'tut');
  //   dispatch(startRewriteUser(res11))
  // }

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const raitingValue = i + 1;

        return (
          <label>
            <input type='radio' name='rating' value={raitingValue} onClick={(e) => { handleRaiting(e) }} />
            <FaStar style={{ marginLeft: '10px' }} className='star' color={raitingValue <= rating ? 'gray' : 'darkgray'} />
          </label>)
      })}

    </div>
  )
}

export default memo(Raiting)
