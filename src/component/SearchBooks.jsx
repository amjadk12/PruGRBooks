import React, { Component } from "react";

export default class SearchBooks extends Component {
  state = {
    value: this.props.searchbooks.searchText
  };

  onTextChange = e => {
    this.setState({ value: e.target.value.trim() });
    console.log(this.state.value);
  };
  // Avoid un-neccesary calls - Already searched or Blank search
  // handleClick = async () => {
  //   if (
  //     (this.props.searchbooks.prevSearchText.toLocaleLowerCase() !==
  //       this.props.searchbooks.searchText.toLocaleLowerCase() ||
  //       this.props.searchbooks.prevSearchText === "") &&
  //     this.props.searchbooks.searchText !== ""
  //   ) {
  //     this.setState({ prevSearchText: this.props.searchbooks.searchText });
  //     const searchResult = await SearchBooksByText(
  //       this.props.searchbooks.searchText.trim()
  //     );
  //     this.setState({
  //       resultBooks: searchResult
  //     });
  //     console.log(this.props.searchbooks.resultBooks);
  //   } else {
  //     alert("already searched or blank search");
  //   }
  // };
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
          value={this.state.value}
        />
        <button
          className="search btn btn-primary btn-sm m-2"
          id="search"
          onClick={() => this.props.onSearch(this.state.value.trim())}
        >
          Search
        </button>
      </div>
    );
  }
}
