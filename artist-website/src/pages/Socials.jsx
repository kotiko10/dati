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
        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
          <span>Instagram</span>
        </a>

        <a href="https://spotify.com" target="_blank">
          <FaSpotify />
          <span>Spotify</span>
        </a>

        <a href="https://youtube.com" target="_blank">
          <FaYoutube />
          <span>YouTube</span>
        </a>

        <a href="https://tiktok.com" target="_blank">
          <FaTiktok />
          <span>TikTok</span>
        </a>
      </div>
    </div>
  );
}

export default Socials;