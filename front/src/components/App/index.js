import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Menu from '../Menu/Menu';
// import DragAndDrop from '../DragAndDrop';
import Panel from '../Panel';

import GuideList from '../GuideList/GuideList';
import Authorization from '../Authorization';
import store from '../../redux/store';
import OneGuide from '../oneGuide/OneGuide';
import LogoutButton from '../LogoutButton';
import NewAuth from '../NewAuth/NewAuth'
import SignIn from '../SignIn/Signin'
import Profile from '../Username/Username'
import ListItem from '../CoffeeList/CoffeeList';
import Item from '../Item/Item';
import Forgot from '../Forgot';
import ReadText from '../ReadText';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../Home/Home'
import Favorites from '../Favorites/Favorites';
import MyCoffee from '../MyCoffee/MyCoffee';
import Wishlist from '../WishList/Wishlist'

function App() {
  const user = useSelector((state) => state.auth);
  return (
    <div className="App">
      <>
        <Switch>
          <Route exact path="/guides">
            {/* <Panel /> */}
            <GuideList />
          </Route>
          <Route exact path="/guides/:id">
            {/* <Panel /> */}
            <OneGuide />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
            {/* <OneGuide /> */}
          </Route>
          <Route exact path="/wishlist">
            <Wishlist />
            {/* <OneGuide /> */}
          </Route>

          <Route exact path="/register">
            <Authorization />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/top">
            {/* <Panel /> */}
            <ListItem />
          </Route>
          <Route exact path="/search">
            <Panel />
          </Route>
          <Route exact path="/mycoffee">
            <MyCoffee />
          </Route>
          <Route exact path="/profile">
            {/* {user ? */}
            <Profile />
            {/* <LogoutButton /> */}
            {/* //  : null} */}
          </Route>
          <Route exact path="/restore">
            <Forgot />
          </Route>
          <Route exact path="/read">
            <ReadText />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        {/* <DragAndDrop /> */}
        <Menu />
      </>
    </div>
  );
}

export default App;
