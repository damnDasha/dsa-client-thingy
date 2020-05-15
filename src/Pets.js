import React, { Component } from "react";
import PetfulContext from "./PetfulContext";

export default class MealMain extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = PetfulContext;

  render() {
    const { cats = [] } = this.context;
    const { dogs = [] } = this.context;

    return (
      <section className="Pets">
        <div className="pets-wrapper">
          <h2 id="journal">all the pets</h2>

          <ul className="pets"></ul>
        </div>
      </section>
    );
  }
}
