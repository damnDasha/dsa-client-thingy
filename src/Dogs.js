import React from "react";
import PetfulContext from "./PetfulContext";
import config from "./config";

export default class Dogs extends React.Component {
  static defaultProps = {
    onDeleteDog: () => {},
  };
  static contextType = PetfulContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const dogsId = this.props.id;

    fetch(`${config.API_ENDPOINT}/dogs`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then(() => {
        this.context.deleteDogs(dogsId);
        // allow parent to perform extra behaviour << you can tell Dasha wrote this
        //because I'm the only one who writes british style
        this.props.onDeleteDogs(dogsId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    console.log(this.context.dogs);
    return (
      <div className="dogs">
        <p className="dogs__title" value={`/dogs`}>
          doge
          {this.context.dogs}
        </p>
        <button
          className="dogs__delete"
          type="button"
          id="deleteme"
          onClick={this.handleClickDelete}
        >
          delete
        </button>
      </div>
    );
  }
}
