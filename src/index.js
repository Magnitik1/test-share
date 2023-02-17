import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import allsongs from './Components/redux/allsongs';
import state from './Components/redux/state';
import theme from './Components/redux/theme';
import foundSongs from './Components/redux/foundSongs';
import allplaylists from './Components/redux/allplaylists';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App AllSongs={allsongs} allplaylists={allplaylists} theme={theme} foundSongs={foundSongs} state={state}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
