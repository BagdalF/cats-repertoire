import { Cat } from "./Gallery";

export const Home = ({ data = [], AVGWeight = 0.0, AVGLifespan = 0.0 }) => {
  return (
    <>
      <div
        className="general-wrapper row g-4 d-flex"
        style={{ margin: "auto" }}
      >
        <h1>Cat's Repertoire</h1>
        <h4 style={{ fontWeight: "400" }}>
          There are {data.length} cat breeds
        </h4>
        <h4 style={{ fontWeight: "400" }}>
          An average cat can weight about {AVGWeight && AVGWeight.toFixed(2)} Kg
          and live {AVGLifespan && AVGLifespan.toFixed(2)} Years.
        </h4>
      </div>
      <div className=" row g-4 d-flex" style={{ margin: "auto 74vh auto" }}>
        <h4 style={{ fontWeight: "600" }}>Cat of The Day</h4>

        <Cat cat={data.length && data[(Math.random() * data.length) | 0]} />
      </div>
    </>
  );
};
