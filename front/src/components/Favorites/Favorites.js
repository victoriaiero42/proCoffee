import React from 'react';
import { useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
// import { startCoffeeItemsSaga } from '../../redux/actions/allItemsActions';
import Item from '../Item/Item';
import FavTitle from '../FavTitle/FavTitle'


function CoffeeList() {
  // const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.id.id)
  const userF = useSelector((state) => state.top.top)
  console.log(user);
  // console.log(userF);
  const fav = [];
  userF.map((el) => {
    if (el.userLiked.includes(user)) {
      fav.push(el)
    }

  })
  console.log(fav);
  // useEffect(() => {


  //   dispatch(startCoffeeItemsSaga())
  // }, [dispatch])

  return (
    <>
      <FavTitle />
      {fav ? fav.map((el) => {
        return <Item key={el._id} id={el._id} />
      }) : null}
      {''}
    </>

  )
}

export default CoffeeList
