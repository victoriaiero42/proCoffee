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
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* <Menu /> */}
        </Route>
        <Route exact path="/guides">
          <MediaCard />
        </Route>
        <Route exact path="/profile">
          {/* <CenteredGrid /> */}
          <Authorization />

        </Route>
        <Route exact path="/search">
          <Panel />
        </Route>
        {/* <Route exact path="/auth">
          <Authorization />
        </Route> */}
      </Switch>
      <Menu />
    </div>
  );
}

export default App;
