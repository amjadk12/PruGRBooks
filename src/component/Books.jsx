import React, { Component, Dimensions } from "react";
import Book from "./Book";

export default class Books extends Component {
  render() {
    const { resultBooks } = this.props.searchbooks;
    return (
      <div className="row">
        {resultBooks === null
          ? ""
          : resultBooks.map(
              book =>
                book === null ? (
                  "No data found"
                ) : (
                  <Book bookData={book} key={book.id} expandBook={true} />
                )
            )}
      </div>
    );
  }
}
