import React, { Component } from "react";
import StartScreen from "./StartScreen";
import { Route } from "react-router-dom";
import config from "./config";
import PetfulContext from "./PetfulContext";
import Pets from "./Pets";
import Cats from "./Cats";
import Dogs from "./Dogs";

class App extends Component {
  state = {
    people: [],
    pets: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/people`),
      fetch(`${config.API_ENDPOINT}/api/pets/cats`),
      fetch(`${config.API_ENDPOINT}/api/pets/dogs`),
    ])
      .then(([peopleRes, catsRes, dogsRes]) => {
        if (!peopleRes.ok)
          return peopleRes.json().then((e) => Promise.reject(e));
        if (!catsRes.ok) return catsRes.json().then((e) => Promise.reject(e));
        if (!dogsRes.ok) return dogsRes.json().then((e) => Promise.reject(e));

        return Promise.all([peopleRes.json(), catsRes.json(), dogsRes.json()]);
      })
      .then(([people, cats, dogs]) => {
        this.setState({ people, cats, dogs });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  render() {
    const value = {
      people: this.state.people,
      cats: this.state.cats,
      dogs: this.state.dogs,
    };

    return (
      <PetfulContext.Provider value={value}>
        <div className="App">
          <Route exact path="/" component={StartScreen} />
          <Route exact path="/main" component={Pets} />
          <Route exact path="/cats" component={Cats} />
          <Route exact path="/dogs" component={Dogs} />
        </div>
      </PetfulContext.Provider>
    );
  }
}

export default App;
