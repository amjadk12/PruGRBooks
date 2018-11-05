import React, { Component } from "react";
import { SearchBooksByText } from "../service/GetBooksByText";

export default class SearchBooks extends Component {
  state = {
    searchText: "",
    prevSearchText: "",
    error: "",
    resultBooks: ""
  };

  onTextChange = e => {
    this.setState({ searchText: e.target.value.trim() });
  };
  // Avoid un-neccesary calls - Already searched or Blank search
  handleClick = async () => {
    if (
      (this.state.prevSearchText.toLocaleLowerCase() !==
        this.state.searchText.toLocaleLowerCase() ||
        this.state.prevSearchText === "") &&
      this.state.searchText !== ""
    ) {
      this.setState({ prevSearchText: this.state.searchText });
      const searchResult = await SearchBooksByText(
        this.state.searchText.trim()
      );
      this.setState({
        resultBooks: searchResult
      });
      console.log(this.state.resultBooks);
    } else {
      alert("already searched or blank search");
    }
  };
  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          className="searchtext mr-1 col-sm-9 form-control"
          type="text"
          placeholder="Search Books By title or author or ISBN"
          name="searchText"
          onChange={this.onTextChange}
          value={this.state.searchText}
        />
        <button
          className="search col-sm-2 btn btn-primary"
          id="search"
          onClick={this.handleClick}
        >
          Search
        </button>
      </div>
    );
  }
}
