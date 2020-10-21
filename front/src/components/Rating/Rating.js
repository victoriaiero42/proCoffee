import React, { useState, useEffect, memo } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { startRatingSaga } from '../../redux/actions/ratingActions';

function Raiting({ id }) {
  const [rating, setRaiting] = useState('');
  const dispatch = useDispatch()
  const [input] = useState({ id, rating });
  console.log(input);

  function handleRaiting(e) {
    console.log(e.target.value);
    setRaiting(e.target.value)

    dispatch(startRatingSaga({ id, rating: e.target.value }))

  }
  // setRaiting(rate)

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const raitingValue = i + 1;

        return (
          <label>
            <input type='radio' name='rating' value={raitingValue} onClick={(e) => { handleRaiting(e) }} />
            <FaStar className='star' color={raitingValue <= rating ? 'darkgray' : 'gray'} />
          </label>)
      })}

    </div>
  )
}

export default memo(Raiting)
