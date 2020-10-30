import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCoffeeItemsSaga } from '../../redux/actions/allItemsActions';
import Item from '../Item/Item';
import TopTitle from '../TopTitle/TopTitle'

function CoffeeList() {
  const dispatch = useDispatch();
  console.log(window.location.pathname);
  const top = useSelector((state) => state.top.top)
  const user = useSelector((state) => state.auth)


  let arr = [];
  if (window.location.pathname === '/favorites') {

    top && top.map((el) => {
      if (el.userLiked.includes(user.id.id)) {
        arr.push(el)
      }
    })
  } else if (window.location.pathname === '/top') {
    arr = top;
  }

  useEffect(() => {

    if (window.location.pathname === '/top') {
      // console.log('inif');
      dispatch(startCoffeeItemsSaga())
    }

  }, [dispatch])

  return (
    <>
      <TopTitle />
      {arr ? arr.map((el) => {
        return <Item key={el._id} id={el._id} />
      }) : null}
    </>

  )
}

export default CoffeeList
