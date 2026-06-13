import "../styles/comingSoon.css";

function Tour() {
  return (
    <div className="page coming-soon">
      <h1>TOUR</h1>

      <p className="subtitle">New tour dates coming soon</p>

      <div className="info-box">
        <p>
          We’re currently planning the next run of shows.
          Stay tuned for announcements.
        </p>

        <button>JOIN MAILING LIST</button>
      </div>
    </div>
  );
}

export default Tour;