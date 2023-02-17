import React, {useState} from "react";
import "./mySettings.css";
import settingsPic from "../../../../pics/mysettings.svg";
import back from "../../../../pics/arrowleft.svg";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

function MySettings(props) {
  const [mytheme, setTheme] = useState(props.theme[0]);
  let changeTheme=()=>{
      
  }
  return (
    <div className="MySettings">
    <div className={props.theme[0] ? "BGDay" :"BGNight"}/>
    <div className={props.theme[0] ? "gradientSetDay mygradient" : "gradientSetNight mygradient"}/>
      <Link to="/Home">
      <img src={back} alt="back" className="back"/>
      </Link>
      <a className={props.theme[0] ?"text goodM daytext":"text goodM nighttext"}><img src={settingsPic} alt="set"/><span className="mid1">&nbsp;&nbsp;Settings</span></a>
      <button onClick={()=>{props.theme[0]=!props.theme[0];setTheme(!mytheme);changeTheme()}} className="themeButton button1">
        {props.theme[0]?"Night Theme":"Day Theme"}
      </button>
    </div>
  );
}

export default MySettings;
