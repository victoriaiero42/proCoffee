import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './components/App';
import './index.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import history from './history';
import store from './redux/store';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#A9A9A9',
    },
    background: {
      default: "#f4e9d7"
    },
    button: {
      fontFamily: "Comic Sans",
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Router>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root'),
);

// kxzhcklgc
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
