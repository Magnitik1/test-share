import React, { useState } from "react";
import "./library.css";
import PlayLists from "./Playlists/Playlists";
import Modal from "./Model/Modal";
function Library(props) {
  const [isModal, setModal] = useState(false);

  let PlyListsElements = props.allplaylists.map((Element) => (
    <PlayLists name={Element.name} picture={Element.picture} id={Element.id} songs={Element.songs} 
    AllSongs={props.AllSongs} allplaylists={props.allplaylists} theme={props.theme}/>
  ));
  return (
    <div className="Library">
      <div className={props.theme[0] ? "BGDay" :"BGNight"}/>
      <div className={props.theme[0] ? "gradientListDay mygradient" : "gradientListNight mygradient"}/>
      <a className={props.theme[0] ? "text2 daytext" : "text2 nighttext"}>Your Libraries</a>
      <ul className="plist">
        {PlyListsElements}</ul>
      <button className="AddNew" onClick={() => setModal(true)}>
        +
      </button>
     
      <Modal isVisible={isModal}
                footer={<button className="button1">Create Playlist</button>}
                onClose={() => setModal(false)} 
                AllSongs={props.AllSongs} allplaylists={props.allplaylists} theme={props.theme} state={props.state}/>
    </div>
  );
}

export default Library;
