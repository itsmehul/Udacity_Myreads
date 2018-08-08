import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookShelfBook from "./BookShelfBook";
import bookPlaceHolder from "./imgs/not-found.png";

class SearchPage extends Component {
  state = {
    books: [],
  }

  //load Search Page data
  searchBooks = async query => {
   await BooksAPI.search(query).then(books => (books && books.error !== "empty query" )?this.setState({books}):this.setState({books:[]})).catch(error=>this.setState({books:[]}))
  };

  render() {

    const { setShelf, collection } = this.props;
    const { books } = this.state;
  

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
        </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((b, i) => {
              const mycollection = collection.find(book => book.id === b.id);
              return (
                <BookShelfBook
                  key={i}
                  title={b.title}
                  authors={b.authors}
                  img={
                    b.imageLinks !== undefined
                      ? b.imageLinks["thumbnail"]
                      : bookPlaceHolder
                  }
                  setShelf={setShelf}
                  book={b}
                  shelf={mycollection !== undefined ? mycollection.shelf : "none"}
                />
              );
            })}

          </ol>
        </div>
      </div>
    );
  };
};
export default SearchPage;
