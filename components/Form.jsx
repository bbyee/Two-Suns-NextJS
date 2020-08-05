import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      phrase: "",
      translated: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePhraseSubmit = this.handlePhraseSubmit.bind(this);
    this.getTranslation = this.getTranslation.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handlePhraseSubmit(event) {
    event.preventDefault();
    this.getTranslation();
  }

  getTranslation() {
    axios
      .get(
        `https://api.funtranslations.com/translate/${this.state.type}.json?text=${this.state.phrase}`
      )
      .then((contents) => {
        console.log("Results here", contents.data.contents.translated);
        this.setState({ translated: contents.data.contents.translated });
      })
      .catch((err) => {
        console.log("Error in getTranslation", err);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlePhraseSubmit}>
          <label>
            Select Language:{" "}
            <select
              name="type"
              value={this.state.type}
              onChange={this.handleInputChange}
            >
              <option value="yoda">Yoda</option>
              <option value="sith">Sith</option>
              <option value="gungan">Gungan</option>
              <option value="huttese">Huttese</option>
              <option value="mandalorian">Mandalorian</option>
              <option value="cheunh">Cheunh</option>
            </select>
          </label>
          <div className="phraseSection">
            <label>
              Enter Phrase:{" "}
              <input
                name="phrase"
                type="text"
                value={this.state.phrase}
                onChange={this.handleInputChange}
              />
            </label>{" "}
            <input type="submit" value="Submit" />
          </div>
        </form>

        <div className="translationSection">Translation:</div>
        <div className="translated">{this.state.translated}</div>
      </div>
    );
  }
}

export default Form;
