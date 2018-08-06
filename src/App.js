import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route, Link } from "react-router-dom";

import BookShelves from "./BookShelves";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  state = {
    books: [],
    collection: []
  };

  //When home loads
  async componentDidMount() {
    const collection = await BooksAPI.getAll().then(collection => collection);
    this.setState({ collection });
  }

  //Search Page data
  searchBooks = async query => {
    const books = await BooksAPI.search(query).then(books => books)
    if (books !== undefined && !books.hasOwnProperty("error")) {
      this.setState({ books });
    }
  };

  render() {
    const { collection, books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookShelves collection={collection} />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage books={books} searchBooks={this.searchBooks} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
