import React from 'react';
import Menu from '../Menu/Menu'
import MediaCard from '../Guides/Guides'
import { Switch, Route } from 'react-router-dom'
// import TabsWrappedLabel from '../ArticleTitle/ArticleTitles'
import CenteredGrid from '../ArticleTitle/ArticleTitles'
import Panel from '../Panel'
import Authorization from '../Authorization'


function App() {
  return (
    <div>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route exact path="/guides">
            <MediaCard />
          </Route>
          <Route exact path="/profile">
            <TabsWrappedLabel />
          </Route>
        </Switch>
        <Menu />
        <Panel />
      </div>
    </div>
  );
}

export default App;
