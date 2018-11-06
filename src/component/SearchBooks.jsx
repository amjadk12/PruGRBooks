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
      <div className="form-group row">
        <input
          className="searchtext mr-1 col-sm-9 form-control"
          type="text"
          placeholder="Search Books By title or author"
          name="searchText"
          onChange={this.onTextChange}
          value={this.state.value}
        />
        <button
          className="search col-sm-2 btn btn-primary"
          id="search"
          onClick={() => onSearch(this.state.value.trim())}
        >
          Search
        </button>
      </div>
    );
  }
}
