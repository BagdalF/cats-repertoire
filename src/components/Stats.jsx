export const Country = ({ country: { country, breedsNumber } }) => {
  let barStyle = {
    width: (breedsNumber * 100) / 28 + "%",
  };

  return (
    <div
      className="stats-bar-wrapper row g-0 justify-content-evenly"
      style={{ width: "100vw" }}
    >
      <div className="col-2">
        <h5 style={{ paddingRight: "1rem", textAlign: "right" }}>{country}</h5>
      </div>
      <div className="col-8">
        <div className="stats-bar-text bg-primary" style={barStyle}>
          <h5>{breedsNumber}</h5>
        </div>
      </div>
      <div className="col-2">
        <h4 style={{ paddingLeft: "1rem", textAlign: "left", margin: 0 }}>
          {breedsNumber}
        </h4>
      </div>
    </div>
  );
};

export const Stats = ({ breedOrigins }) => {
  return (
    <div className="stats-wrapper">
      <h2>Stats</h2>
      <h4>{breedOrigins && breedOrigins.length} countries have cat breeds</h4>
      <h4>
        The country with highest number of cat breeds is{" "}
        {breedOrigins[0] && breedOrigins[0].country}
      </h4>
      <div>
        {breedOrigins.map((country) => (
          <Country country={country} />
        ))}
      </div>
    </div>
  );
};
