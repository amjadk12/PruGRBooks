import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBooks from "../component/SearchBooks";
import Books from "../component/Books";
import BookDetails from "../component/BookDetails";
import { SearchBooksByText } from "../service/GetBooksByText";

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
        <div className="header clearfix mt-5">
          <h3 className="text-muted">Pru-Goodreads Search</h3>
        </div>
        <div>
          <SearchBooks
            className="searchbooks"
            onSearch={this.handleSearch}
            searchbooks={this.state.searchbooks}
          />
        </div>
        <div className="jumbotron">
          <Books
            className="books"
            searchbooks={this.state.searchbooks}
            collapseBook={this.expandedBook}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  searchbooks: PropTypes.array,
  expandBook: PropTypes.func
};
