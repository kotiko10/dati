function Tour() {
  const shows = [
    {
      city: "Berlin",
      venue: "Mercedes Arena",
      date: "July 14",
    },
    {
      city: "Budapest",
      venue: "Akvárium Klub",
      date: "July 21",
    },
  ];

  return (
    <div className="page">
      <h1>TOUR DATES</h1>

      <div className="tour-list">
        {shows.map((show, index) => (
          <div className="tour-card" key={index}>
            <h2>{show.city}</h2>

            <p>{show.venue}</p>

            <span>{show.date}</span>

            <button>BUY TICKETS</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tour;