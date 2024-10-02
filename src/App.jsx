import { Component } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//utils imports
import { WeightAverage, LifespanAverage } from "./utils/averages.js";
import { CountriesBreeds } from "./utils/countries.js";

//components imports
import { Navegation } from "./components/Navegation.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./components/Home.jsx";
import { Stats } from "./components/Stats.jsx";
import { Gallery } from "./components/Gallery.jsx";

export class App extends Component {
  state = {
    data: [],
    AVGWeight: 0,
    AVGLifespan: 0,
    breedOrigins: [],
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const url = "https://api.thecatapi.com/v1/breeds";
    try {
      //get data
      const response = await axios.get(url);
      const data = await response.data;

      // call utils to define state
      let AVGWeight = WeightAverage(data);
      let AVGLifespan = LifespanAverage(data);
      let breedOrigins = CountriesBreeds(data);

      this.setState({
        data,
        AVGWeight,
        AVGLifespan,
        breedOrigins,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { data, AVGWeight, AVGLifespan, breedOrigins } = this.state;

    const NotFound = (props) => (
      <h1>The page you're looking for was not found</h1>
    );

    return (
      <BrowserRouter>
        <div className="App">
          <Navegation />

          <main>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    data={data}
                    AVGWeight={AVGWeight}
                    AVGLifespan={AVGLifespan}
                  />
                }
              />
              <Route
                exact
                path="/stats"
                element={<Stats breedOrigins={breedOrigins} />}
              />
              <Route exact path="/gallery" element={<Gallery data={data} />} />
              <Route element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
