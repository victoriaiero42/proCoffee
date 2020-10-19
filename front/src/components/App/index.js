import React from 'react';

import Menu from '../Menu/Menu';
import MediaCard from '../Guides/Guides';
// import DragAndDrop from '../DragAndDrop';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Menu from '../Menu/Menu';
import GuideList from '../GuideList/GuideList';
import Panel from '../Panel';
import Authorization from '../Authorization';
import store from '../../redux/store';
import OneGuide from '../oneGuide/OneGuide';
import LoginForm from '../LoginForm';



function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <Switch>
          <Route exact path="/guides">
            <GuideList />
          </Route>
          <Route exact path="/guides/:id">
            <OneGuide />
          </Route>
          <Route exact path="/profile">
            <Authorization />
          </Route>
          <Route exact path="/search">
            <Panel />
          </Route>
        </Switch>
        {/* <DragAndDrop /> */}
        <Menu />
      </Provider>
    </div>
  );
}

export default App;
