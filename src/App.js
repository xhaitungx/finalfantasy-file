import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
import { Home, Detail } from "./pages/index";
import { CardList } from "./components/index";
class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    axios("https://www.moogleapi.com/api/v1/characters")
      .then((response) => response.data.reverse())
      .then((fetchedData) => this.setState({ characters: fetchedData }));
  }

  render() {
    const filteredData = this.state.characters.filter((character) =>
      character.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="text"
          placeholder="Tìm kiếm nhân vật"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList arrayCharacters={filteredData} />
      </div>
    );
  }
}

export default App;
