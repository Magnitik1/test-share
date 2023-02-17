import React,{useState} from "react";
import "./found.css";
import AllSongs from "../../../../redux/allsongs";

const Found = (props) => {
  return (
    <div className="Found">
        <p>{props.songs.map(e=>e)}</p>
    </div>
  );
};

export default Found;
