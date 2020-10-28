import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
// import { startCoffeeItemsSaga } from '../../redux/actions/allItemsActions';
import Item from '../Item/Item';
// import FavTitle from '../FavTitle/FavTitle'
import Rtitle from '../rTitle/rTitle'


function CoffeeList() {
  // const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.id.raited)
  console.log(user);
  // useEffect(() => {


  //   dispatch(startCoffeeItemsSaga())
  // }, [dispatch])

  return (
    <>
      <Rtitle />
      {user ? user.map((el) => {
        return <Item key={el._id} id={el._id} />
      }) : null}
      {''}
    </>

  )
}

export default CoffeeList
