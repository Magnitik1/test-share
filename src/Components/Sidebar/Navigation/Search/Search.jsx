import React,{useState} from "react";
import "./search.css";
import searchPic from "../../../pics/search2.svg";
import Found from "./Found/Found";

const Search = (props) => {
  let textInput =  React.createRef();
  let [text, setText] = useState("");
  let allSongs = [];

  let search=()=>{
    alert(props.foundSongs.length)
    props.foundSongs.push("q2")
    alert(props.foundSongs.length)
    allSongs = []
    for(let i=0;i<props.AllSongs.length;i++){
      text=text.toLowerCase();
      if(props.AllSongs[i].name.toLowerCase().includes(text)||props.AllSongs[i].author.toLowerCase().includes(text)){
        allSongs.push(props.AllSongs[i].author + ' - '+props.AllSongs[i].name);
      }
    }
    
    
  }
  return (
    <div className="Search">
    <div className={props.theme[0] ? "BGDay" :"BGNight"}/>
    <div className={props.theme[0] ? "gradientSearchDay mygradient" : "gradientSearchNight mygradient"}/>
    <Found songs={allSongs}/>
      <form onSubmit={search}>
        <input
          type="text"
          id="uname"
          className="sLine"
          placeholder="Song, Artist"
          ref={textInput}
          onSubmit={(e) => setText(e.target.value)}>
          </input>
        <button type="submit">
          <img src={searchPic} alt="search" className="sPic" />
        </button>
      </form>
      <a className="text1">Search</a>
    </div>
  );
};

export default Search;
