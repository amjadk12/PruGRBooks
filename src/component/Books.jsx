import React, { Component, Dimensions } from "react";
import Book from "./Book";

export default class Books extends Component {
  render() {
    const { resultBooks } = this.props.searchbooks;
    //return <div>({JSON.stringify(resultBooks)})</div>;
    return (
      <div className="row">
        {resultBooks === null
          ? ""
          : resultBooks.map(
              book =>
                book === null ? (
                  "No data found"
                ) : (
                  //   : "MyBook:" + JSON.stringify(book.best_book.image_url)
                  <Book bookData={book} key={book.id} expandBook={true} />
                )
            )}
      </div>
    );
  }
}
