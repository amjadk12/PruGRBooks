import React, { Component } from "react";

export default class SearchBooks extends Component {
  state = {
    value: this.props.searchbooks.searchText
  };

  onTextChange = e => {
    this.setState({ value: e.target.value.trim() });
    console.log(this.state.value);
  };

  render() {
    const { onSearch } = this.props;
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
          onClick={() => onSearch(this.state.value.trim())}
        >
          Search
        </button>
      </div>
    );
  }
}
