import { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "../styles/album.css";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

function Album() {
  const { id } = useParams();
  const location = useLocation();
  const album = location.state?.album;

  const [showLinks, setShowLinks] = useState(false);

  if (!album) {
    return (
      <div className="album-page-error">
        <h1>Album not found</h1>
        <Link to="/music">Back</Link>
      </div>
    );
  }

  // Fallback map: structural guard in case data naming conventions differ
  const spotifyUrl = "https://open.spotify.com/artist/0E1Yd4BPHXB4DfTaYb9Y5i";
  const appleUrl = "https://music.apple.com/us/artist/da-ti/1789890751";
  const youtubeUrl = "https://music.youtube.com/@Datiii";

  return (
    <div className="album-page">
      <Link to="/music" className="back">
        ← BACK TO MUSIC
      </Link>

      <img src={album.cover} alt={album.title} className="album-cover" />

      <h1 className="album-title">{album.title}</h1>

      {/* Dynamic Action Button */}
      <button 
        className={`listen-btn ${showLinks ? "active" : ""}`}
        onClick={() => setShowLinks(!showLinks)}
      >
        {showLinks ? "CLOSE" : "LISTEN"}
      </button>

      {/* Streaming Platform Icons Container */}
      {showLinks && (
        <div className="stream-links fade-in">
          <a href={spotifyUrl} target="_blank" rel="noreferrer" className="icon-link">
            <FaSpotify />
          </a>
          <a href={appleUrl} target="_blank" rel="noreferrer" className="icon-link">
            <FaApple />
          </a>
          <a href={youtubeUrl} target="_blank" rel="noreferrer" className="icon-link">
            <FaYoutube />
          </a>
        </div>
      )}

      {album.description && <p className="album-desc">{album.description}</p>}
    </div>
  );
}

export default Album;