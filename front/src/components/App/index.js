import React from 'react';
import Menu from '../Menu/Menu';
import MediaCard from '../Guides/Guides';
import { Switch, Route } from 'react-router-dom';
// import TabsWrappedLabel from '../ArticleTitle/ArticleTitles'
import CenteredGrid from '../ArticleTitle/ArticleTitles';
import Panel from '../Panel';
import { Provider } from 'react-redux';
import Authorization from '../Authorization';
import store from '../../redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Authorization />
        <Switch>
          <Route exact path="/">
            {/* <Menu /> */}
          </Route>
          <Route exact path="/guides">
            <MediaCard />
          </Route>
          <Route exact path="/profile">
            <CenteredGrid />
          </Route>
          <Route exact path="/search">
            <Panel />
          </Route>
        </Switch>
        <Menu />
      </Provider>
    </div>
  );
}

export default App;
