import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelfBook from "./BookShelfBook";

class SearchPage extends Component {
  state = {
    query: ""
  };
  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
  };
  clearQuery = () => {
    this.updateQuery("");
  };
  render() {
    const { books } = this.props;
    const { query } = this.state;
    const showingBooks =
      query === ""
        ? books
        : books.filter(c =>
            c.title.toLowerCase().includes(query.toLowerCase())
          );
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
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
          {showingBooks.length !== books.length && (
            <div className="showing-books">
              <span>
                Now showing {showingBooks.length} of {books.length}
              </span>
              <button onClick={this.clearQuery}>Show all</button>
            </div>
          )}
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map(b => (
              <li key={b.title}>
                <BookShelfBook
                  title={b.title}
                  authors={b.authors}
                  img={b.imageLinks.smallThumbnail}
                  shelf={b.shelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
