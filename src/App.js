import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import HomePage from "./components/homepage.component"

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      jokes: [],
      comedians: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/jokes/ten")
      .then(response => response.json())
      .then(jokes => this.setState({ jokes: jokes }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { jokes, searchField } = this.state;
    const filteredJokes = jokes.filter(joke =>
      joke.type.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>The Ha Ha Lounge</h1>
        <SearchBox
          placeHolder="joke category"
          handleChange={this.handleChange}
        />
        <CardList jokes={filteredJokes} />
        <HomePage/>
      </div>
    );
  }
}

export default App;
