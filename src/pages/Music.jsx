import { Link } from "react-router-dom";
import "../styles/music.css";
import takeMeThereCover from "../assets/albums/TakeMeThere.jpg";
import dativerseCover from "../assets/albums/DATIVERSE.jpg";
import fallingCover from '../assets/albums/FallingForYourEyes.jpg';
import gumpCover from '../assets/albums/forrestGump.jpg';
import strangersCover from '../assets/albums/strangers.jpg';
import beingAloneCover from '../assets/albums/alone.jpg';
import dreamCover from '../assets/albums/dream.jpg';
import purpleButterflyCover from '../assets/albums/buterfly.jpg';


const albums = [
  {
    id: "Take Me There",
    title: "Take Me There",
    cover: takeMeThereCover
  },
  {
    id: "DATIVERSE",
    title: "DATIVERSE",
    cover: dativerseCover,
  },
  {
    id: "CALL ME BACK TONIGHT",
    title: "CALL ME BACK TONIGHT",
    cover: dativerseCover,
  },
  {
    id: "PURPLE BUTTERFLY",
    title: "PURPLE BUTTERFLY",
    cover: dativerseCover,
  },
  {
    id: "PURPLE BUTTERFLY",
    title: "PURPLE BUTTERFLY",
    cover: purpleButterflyCover,
  },
  {
    id: "FALLING FOR YOUR EYES",
    title: "FALLING FOR YOUR EYES",
    cover: fallingCover,
  },
  {
    id: "DREAM",
    title: "DREAM",
    cover: dreamCover,
  },
  {
    id: "TURN INTO STRAGNERS",
    title: "TURN INTO STRAGNERS",
    cover: strangersCover,
  },
  {
    id: "BEING ALONE",
    title: "BEING ALONE",
    cover: beingAloneCover,
  },
  {
    id: "RUN LIKE FOREST GUMP",
    title: "RUN LIKE FOREST GUMP",
    cover: gumpCover,
  },
];

function Music() {
  return (
    <div className="page music-page">
      <h1>MUSIC</h1>

      <div className="album-grid">
        {albums.map((album) => (
         <Link
            to={`/music/${album.id}`}
            key={album.id}
            state={{ album }}
            className="album-card"
        >
            <img src={album.cover} alt={album.title} />
            <h2>{album.title}</h2>
        </Link>
        ))}
      </div>
    </div>
  );
}

export default Music;