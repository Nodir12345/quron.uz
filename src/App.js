import { useEffect, useState } from "react";
import { Player } from "./components/player/player";
function App() {
  const [songs] = useState([
    {
      title: "Fotiha",
      artist: "1",
      img_src: "./img/img1.jpg",
      src: "./audio/audio1.mp3",
    },
    {
      title: "Baqara",
      artist: "2",
      img_src: "./img/img2.jpg",
      src: "./audio/audio3.mp3",
    },
    {
      title: "Oli Imron",
      artist: "3",
      img_src: "./img/img3.png",
      src: "./audio/aud3.mp3",
    },
    {
      title: "An-Nisa",
      artist: "4",
      img_src: "./img/img4.jpeg",
      src: "./audio/audio4.mp3",
    },
    {
      title: "Al-ma'idah",
      artist: "5",
      img_src: "./img/img5.jpeg",
      src: "./audio/audio5.mp3",
    },
    {
      title: "Al-An'am",
      artist: "6",
      img_src: "./img/img6.jpeg",
      src: "./audio/audio6.mp3",
    },
    {
      title: "Al-A'raf",
      artist: "7",
      img_src: "./img/img6.jpeg",
      src: "./audio/audio7.mp3",
    },
    {
      title: "Al-Anfal",
      artist: "8",
      img_src: "./img/img8.jpg",
      src: "./audio/audio8.mp3",
    },
    {
      title: "At-Taubah",
      artist: "9",
      img_src: "./img/img9.jpeg",
      src: "./audio/audio9.mp3",
    },
    {
      title: "Yunus",
      artist: "10",
      img_src: "./img/img10.png",
      src: "./audio/audio10.mp3",
    },


  ]);

  const [current, setcurrent] = useState(0);
  const [next, setnext] = useState(0);
  useEffect(() => {
    setnext(() => {
      if (current + 1 > songs.length - 1) {
        return 0;
      } else {
        return current + 1;
      }
    });
  }, [current, songs.length]);
  return (
    <>
      <Player current={current} setcurrent={setcurrent}
      next={next}
      songs ={songs}
      ></Player>
    </>
  );
}

export default App;
