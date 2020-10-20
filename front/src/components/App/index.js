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

import SignIn from '../SignIn/Signin'
import Profile from '../Username/Username'
import ListItem from '../CoffeeList/CoffeeList';
import Item from '../Item/Item';
import Forgot from '../Forgot';
// import List from '../'


function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <Switch>
          {/* <Panel /> */}
          <Route exact path="/guides">
            <Panel />
            <GuideList />
          </Route>
          <Route exact path="/guides/:id">
            <Panel />
            <OneGuide />
          </Route>

          <Route exact path="/register">
            <Authorization />
          </Route>
          <Route exact path="/signin">
            <Panel />

            <SignIn />
          </Route>
          <Route exact path="/search">
            <Panel />
            <ListItem />
          </Route>
          <Route exact path="/item">
            <Panel />
            <Item />
            {/* <Panel />
            <ListItem /> */}
          </Route>
          <Route exact path="/restore">
            <Forgot />
          </Route>
        </Switch>
        {/* <DragAndDrop /> */}
        <Menu />
        {/* <Panel /> */}
      </Provider>
    </div>
  );
}

export default App;
