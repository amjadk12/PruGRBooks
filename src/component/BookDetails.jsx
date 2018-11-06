import React, { Component } from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import { SearchBookDetailsById } from "../service/GetBookDetails";

const apiKey = process.env.REACT_APP_API_KEY;

export default class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "Fetching description for this book...",
      error: ""
    };
  }

  componentDidMount() {
    const bookId = this.props.bookData.best_book.id;
    const description = SearchBookDetailsById(bookId);
    this.setState({
      description
    });
  }

  render() {
    const { bookData, onCollapsClicked } = this.props;
    return (
      <div className="row col-lg-12">
        <button className="btn btn-primary" onClick={onCollapsClicked}>
          {"<< Go Back"}
        </button>

        <h3 className="col-lg-12 mb-3 mt-3">{bookData.best_book.title}</h3>
        <div className="col-lg-2 col-sm-4 ">
          <img
            src={bookData.best_book.image_url}
            height="200px"
            width="130px"
            alt="book cover"
          />
          <p>
            By:{" "}
            <span className="font-weight-bold">
              {bookData.best_book.author.name}
            </span>
          </p>
          <p>Avg. Rating: {bookData.average_rating}</p>
        </div>
        <div className="col-lg-10 col-sm-8">
          {(this.state.error && (
            <p className="text-danger">{this.state.error}</p>
          )) || (
            <p dangerouslySetInnerHTML={{ __html: this.state.description }} />
          )}
        </div>
        <div>
          <p>
            Published Date:{" "}
            {`${bookData.original_publication_day}/${
              bookData.original_publication_month
            }/${bookData.original_publication_year}`}
            .{" "}
            <a
              href={`https://www.goodreads.com/book/show/${
                bookData.best_book.id
              }`}
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    );
  }
}

BookDetails.propTypes = {
  bookData: PropTypes.object,
  collapseBook: PropTypes.func
};
