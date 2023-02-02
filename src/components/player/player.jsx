import React, { useEffect } from "react";
import { Radius } from "../radious/radius";
import { Control } from "../control/control";

import "./player.scss";
export const Player = (props) => {
  const audioEl = React.useRef(null);
  const [isplay, setisplay] = React.useState(false);
  useEffect(() => {
    if (isplay) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });
  const skipsong = (fowards = true) => {
    if (fowards) {
      props.setcurrent(() => {
        let temp = props.current;
        temp++;
        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setcurrent(() => {
        let temp = props.current;
        temp--;
        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };
  return (
    <div className="container box">
      <h1>Furqon.uz</h1>
      <Radius song={props.songs[props.current]}></Radius>
      <Control
        isplay={isplay}
        setisplay={setisplay}
        skipsong={skipsong}
      ></Control>
      <audio className="audio" src={props.songs[props.current].src}
      ref={audioEl}
      controls></audio>
      <div className="fff">

      <p className="text_a">
        Next Up : <span>{props.songs[props.next].title}
         { " " } {props.songs[props.next].artist}
         </span>
      </p>
      <p className="text2">Mishary Rashid Al-Afasy</p>
      </div>
    </div>
  );
};
