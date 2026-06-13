import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import "../styles/socials.css";

function Socials() {
  return (
    <div className="page socials-page">
      <h1>FIND US</h1>

      <div className="social-grid">
        <a href="https://www.instagram.com/dati.ttt" target="_blank">
          <FaInstagram />
          <span>Instagram</span>
        </a>

        <a href="https://open.spotify.com/artist/0E1Yd4BPHXB4DfTaYb9Y5i" target="_blank">
          <FaSpotify />
          <span>Spotify</span>
        </a>

        <a href="https://music.youtube.com/@Datiii" target="_blank">
          <FaYoutube />
          <span>YouTube</span>
        </a>

        <a href="https://www.tiktok.com/@dati.tt" target="_blank">
          <FaTiktok />
          <span>TikTok</span>
        </a>
      </div>
    </div>
  );
}

export default Socials;