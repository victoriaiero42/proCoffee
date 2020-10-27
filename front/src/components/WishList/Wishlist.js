import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { startCoffeeItemsSaga } from '../../redux/actions/allItemsActions';
import Item from '../Item/Item';
// import FavTitle from '../FavTitle/FavTitle'
import WishTitle from '../WishTitle/WishTitle'

function CoffeeList() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.id.wishlist)
  console.log(user);
  // useEffect(() => {


  //   dispatch(startCoffeeItemsSaga())
  // }, [dispatch])

  return (
    <>
      <WishTitle />
      {user ? user.map((el) => {
        return <Item key={el._id} id={el._id} />
      }) : null}
      {''}
    </>

  )
}

export default CoffeeList
