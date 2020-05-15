import React from "react";
import PetfulContext from "./PetfulContext";
import config from "./config";

export default class Cats extends React.Component {
  static defaultProps = {
    onDeleteCat: () => {},
  };
  static contextType = PetfulContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const catsId = this.props.id;

    fetch(`${config.API_ENDPOINT}/cats/${catsId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then(() => {
        this.context.deleteCats(catsId);
        // allow parent to perform extra behaviour << you can tell Dasha wrote this
        //because I'm the only one who writes british style
        this.props.onDeleteCats(catsId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const {
      name,
      age,
      breed,
      description,
      gender,
      imageURL,
      story,
    } = this.props;
    return (
      <div className="cats">
        <p className="cats__title" value={`/cats`}>
          {name}
          {age}
          {breed}
          {description}
          {gender}
          {imageURL}
          {story}
        </p>
        <button
          className="cats__delete"
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
