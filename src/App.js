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

  //load Search Page data
  searchBooks = async query => {
    const books = await BooksAPI.search(query).then(books => books);
    if (books !== undefined && !books.hasOwnProperty("error")) {
      this.setState({ books });
    }
  };

  //Change shelf
  setShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
    this.setState(prevState => ({
      collection: prevState.collection.filter(b => b !== book ).concat(book)
    }));
  };


  render() {
    const { collection, books } = this.state;
    console.log(collection);
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
              <BookShelves collection={collection} setShelf={this.setShelf}/>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage books={books} collection={collection} searchBooks={this.searchBooks} setShelf={this.setShelf}/>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
