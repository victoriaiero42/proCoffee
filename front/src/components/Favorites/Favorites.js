import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCoffeeItemsSaga } from '../../redux/actions/allItemsActions';
import Item from '../Item/Item';
import FavTitle from '../FavTitle/FavTitle'


function CoffeeList() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.id.id)
  const userF = useSelector((state) => state.top.top)
  console.log(window.location.pathname);

  let arr = [];
  if (window.location.pathname === '/favorites') {

    userF && userF.map((el) => {
      if (el.userLiked.includes(user)) {
        arr.push(el)
      }
    })
  } else if (window.location.pathname === '/top') {
    arr = userF;
  }

  useEffect(() => {
    if (window.location.pathname === '/top') {
      console.log('inif');
      dispatch(startCoffeeItemsSaga())
    }


  }, [dispatch])

  return (
    <>
      <FavTitle />
      {arr ? arr.map((el) => {
        return <Item key={el._id} id={el._id} />
      }) : null}
      {''}
    </>

  )

}

export default memo(CoffeeList);

