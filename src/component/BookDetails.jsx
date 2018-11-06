import React, { Component } from "react";
import PropTypes from "prop-types";
import { SearchBookDetailsById } from "../service/GetBookDetails";

const apiKey = process.env.REACT_APP_API_KEY;

export default class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      error: ""
    };
  }
  callSearchBook = async () => {
    const bookId = this.props.bookData.best_book.id;
    const myBookDesc = await SearchBookDetailsById(bookId);

    this.setState({
      description: myBookDesc
    });
    console.log(myBookDesc);
  };
  componentDidMount() {
    this.callSearchBook();
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
          <p dangerouslySetInnerHTML={{ __html: this.state.description }} />
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
