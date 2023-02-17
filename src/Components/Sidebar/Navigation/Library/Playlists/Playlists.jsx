import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./playlists.css";
import mydel from "../../../../pics/bin.svg";

const Playlists = (props) => {
  const [listVisibility, SetlistVisibility] = useState(true);
  const myAltsrc = () => {
    <img
      src="https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg"
      className="favbg"
      alt="d&d"
    />;
  };
  const Remove = () => {
    if (props.id == 1) return;
    SetlistVisibility((visible) => !visible);
    // props.allplaylists.pop(props.allplaylistsfindIndex(e=>e.id===props.id));

    for (
      let i = props.allplaylists.findIndex((e) => e.id === props.id);
      i < props.allplaylists.length - 1;
      i++
    ) {
      props.allplaylists[i] = props.allplaylists[i + 1];
    }
    props.allplaylists.pop();
  };
  
  let ShowSongs = () => {
    let str = "";
    if (props.id === 1) {
      props.AllSongs.forEach((e) => {
        str += e.id + " - " + e.name + "\n";
      });
      
      alert(str);
    } else {
      // воно дивиться по id, в props приходять усі id пісень цього плейлиста, а в AllSongs вся інфа про ці пісні і id у відповідному порядку
      props.songs.forEach((e) => {
        str += e + " - " + props.AllSongs.find((el) => el.id === e).name + "\n";
      });
      alert(str);
    }
  };

  return (
    <div className="Playlists">
      {listVisibility && (
        <div className="myred">
          <Link to="" style={{ textDecoration: "none" }} className="mygreen">
            <li onClick={ShowSongs}>
              <img src={props.picture} className="favbg" alt={myAltsrc} />
              <a className={props.theme[0] ? "test daytext" : "test nighttext"}>
                {" "}
                &nbsp;&nbsp;&nbsp;{props.name}
              </a>
            </li>
          </Link>
          <Link className="delbutton">
            <img onClick={Remove} src={mydel} alt="Delete" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Playlists;
