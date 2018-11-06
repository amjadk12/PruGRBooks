import React, { Component } from "react";
import SearchBooks from "../component/SearchBooks";
import { SearchBooksByText } from "../service/GetBooksByText";

export default class Home extends Component {
  state = {
    searchbooks: {
      searchText: "Amjad",
      prevSearchText: "",
      error: "",
      resultBooks: ""
    }
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
        searchTextValue.toLocaleLowerCase() &&
      searchTextValue !== ""
    ) {
      // this.setState({
      //   searchbooks: { prevSearchText: searchTextValue.toLocaleLowerCase() }
      // });
      const searchResult = await SearchBooksByText(searchTextValue.trim());
      this.setState({
        searchbooks: {
          searchText: searchTextValue,
          resultBooks: searchResult,
          prevSearchText: searchTextValue
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
          onSearch={this.handleSearch}
          searchbooks={this.state.searchbooks}
        />
      </div>
    );
  }
}
