import React, { Component } from "react";
import { SearchBox, CardList } from "../../components/index";
import axios from "axios";
class Home extends Component {
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
      <div className="home">
        <SearchBox
          placeholder={"Tìm kiếm nhân vật"}
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList arrayCharacters={filteredData} />
      </div>
    );
  }
}

export default Home;
