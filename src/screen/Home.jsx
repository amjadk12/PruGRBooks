import React, { Component } from "react";
import SearchBooks from "../component/SearchBooks";
import Books from "../component/Books";
import { SearchBooksByText } from "../service/GetBooksByText";
import PropTypes from "prop-types";

export default class Home extends Component {
  state = {
    searchbooks: {
      searchText: "",
      prevSearchText: "",
      error: "",
      resultBooks: null,
      collapseBook: null,
      expandedBook: null
    }
  };

  collapseBook = () => {
    this.setState({
      expandedBook: null
    });
  };

  expandBook = expandedBook => {
    this.setState({ expandedBook });
  };

  handleSearch = async searchTextValue => {
    console.log(
      "Seach called:" +
        searchTextValue +
        " PrevSearch:" +
        this.state.searchbooks.prevSearchText
    );
    if (
      this.state.searchbooks.prevSearchText !==
        searchTextValue.trim().toLocaleLowerCase() &&
      searchTextValue !== ""
    ) {
      const searchResult = await SearchBooksByText(
        searchTextValue.trim().toLocaleLowerCase()
      );
      this.setState({
        searchbooks: {
          searchText: searchTextValue.trim().toLocaleLowerCase(),
          resultBooks: searchResult,
          prevSearchText: searchTextValue.trim().toLocaleLowerCase()
        }
      });
      console.log(this.state.searchbooks.resultBooks);
    } else {
      alert("already searched or blank search");
    }
  };
  render() {
    return (
      <div>
        <SearchBooks
          className="searchbooks"
          onSearch={this.handleSearch}
          searchbooks={this.state.searchbooks}
        />
        <Books
          className="books"
          searchbooks={this.state.searchbooks}
          collapseBook={this.expandedBook}
        />
      </div>
    );
  }
}

Home.propTypes = {
  searchbooks: PropTypes.array,
  expandBook: PropTypes.func
};
