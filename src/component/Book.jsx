import React, { Component, Dimensions, Image } from "react";
import BookDetails from "./BookDetails";

export default class Book extends Component {
  state = {
    collapseBook: null,
    expandedBook: null
  };
  handleClickBook = () => {
    this.setState({ expandedBook: true });
    console.log("Clicked book" + this.props.bookData.best_book.title);
  };
  handleClickCollapsBook = () => {
    this.setState({ expandedBook: false });
    console.log("Clicked Collaps Book");
  };
  render() {
    const { bookData, expandBook } = this.props;
    const bookTitle = bookData.best_book.title;
    let displayTitle = bookTitle
      .split(" ")
      .slice(0, 4)
      .join(" ");
    if (bookTitle.length > displayTitle.length) {
      displayTitle += "...";
    }
    return (
      <div>
        {this.state.expandedBook ? (
          <BookDetails
            bookData={this.props.bookData}
            expandedBook={true}
            onCollapsClicked={this.handleClickCollapsBook}
          />
        ) : (
          <div className="col-lg-2 col-sm-4 col-md-3">
            <div className="card">
              <img
                className="card-img-top pl-2 pr-2 pt-2"
                src={bookData.best_book.image_url}
                alt="Book cover"
                height="200px"
              />
              <div className="card-body">
                <p
                  className="text-sm-left card-title font-weight-bold"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title={displayTitle.includes("...") ? bookTitle : ""}
                >
                  {displayTitle}
                </p>
                <p className="text-sm-left card-text">
                  {bookData.best_book.author.name}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={this.handleClickBook}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
