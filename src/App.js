import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Sidebar/Navigation/Home/Home";
import Search from './Components/Sidebar/Navigation/Search/Search';
import Library from './Components/Sidebar/Navigation/Library/Library';
import MySettings from './Components/Sidebar/Navigation/Home/MySettings/MySettings';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
    <Sidebar/>
      <header className="App-header">
      <a className='bg'></a>
      <a className='gradient'></a>
        <Routes>
            <Route path='/Search' element={<Search theme={props.theme} AllSongs={props.AllSongs} foundSongs={props.foundSongs}/>}/>
            <Route path='/Home' element={<Home theme={props.theme}/>}/>
            <Route path='/Library' element={<Library theme={props.theme} AllSongs={props.AllSongs} allplaylists={props.allplaylists} state={props.state}/>}/>
            <Route path='/MySettings' element={<MySettings theme={props.theme}/>}/>
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
