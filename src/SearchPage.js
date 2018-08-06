import React from "react";
import { Link } from "react-router-dom";
import BookShelfBook from "./BookShelfBook";
import bookPlaceHolder from './imgs/not-found.png'

const SearchPage = props => {
  const { books, searchBooks } = props;

  //For every change in the input a new search request in fired
  const updateQuery = query => {
    if(query!==''){
    searchBooks(query);}
  };

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
            onChange={event => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((b,i) => (
            <li key={i}>
              <BookShelfBook
                title={b.title}
                authors={b.authors}
                img={
                  b.imageLinks !== undefined
                    ? b.imageLinks["thumbnail"]
                    : bookPlaceHolder
                }
                shelf={b.shelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
