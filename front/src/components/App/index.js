import React from 'react';
import Menu from '../Menu/Menu';
import MediaCard from '../Guides/Guides';
// import DragAndDrop from '../DragAndDrop';
import { Switch, Route } from 'react-router-dom';
// import TabsWrappedLabel from '../ArticleTitle/ArticleTitles'
import CenteredGrid from '../ArticleTitle/ArticleTitles';
import Panel from '../Panel';
import { Provider } from 'react-redux';
import Authorization from '../Authorization';
import store from '../../redux/store';



function App() {
  return (
    // <div className="App">
    //   <Switch>
    //     <Route exact path="/">
    //       {/* <Menu /> */}
    //     </Route>
    //     <Route exact path="/guides">
    //       <MediaCard />
    //     </Route>
    //     <Route exact path="/profile">
    //       {/* <CenteredGrid /> */}
    //       <Authorization />

    //     </Route>
    //     <Route exact path="/search">
    //       <Panel />
    //     </Route>
    //     {/* <Route exact path="/auth">
    //       <Authorization />
    //     </Route> */}
    //   </Switch>
    //   <Menu />
    <div className="App">

      <Provider store={store}>
        {/* <Authorization /> */}
        <Switch>
          {/* <Route exact path="/">
            {/* <Menu /> */}
          {/* </Route> */}
          <Route exact path="/guides">
            <MediaCard />
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
