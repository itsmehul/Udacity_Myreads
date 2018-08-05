import React from "react";
import * as BooksAPI from './BooksAPI'
import "./App.css";
import { Route, Link } from "react-router-dom";

import BookShelves from "./BookShelves";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  state = {
    books:[]
  };
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }


  render() {
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
              <BookShelves />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route path="/search" render={() => <SearchPage books={this.state.books} />} />
      </div>
    );
  }
}

export default BooksApp;
