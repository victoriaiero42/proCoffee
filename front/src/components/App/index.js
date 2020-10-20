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
import LoginForm from '../LoginForm';
import LogoutButton from '../LogoutButton';

import SignIn from '../SignIn/Signin'
import Profile from '../Username/Username'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <LoginForm />
        <LogoutButton />
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
          <Route exact path="/profile">
            <Panel />

            {/* <Authorization /> */}
            <SignIn />

            {/* <Profile /> */}
          </Route>
          <Route exact path="/search">
            <Panel />
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
