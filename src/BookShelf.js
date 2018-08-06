import React from "react";
import BookShelfBook from "./BookShelfBook";

const BookShelf = props => {
  const { bookCategory, setShelf } = props;
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookCategory.map((b,i) => (
              <li key={i}>
                <BookShelfBook
                  title={b.title}
                  authors={b.authors}
                  img={b.imageLinks.smallThumbnail}
                  shelf={b.shelf}
                  setShelf={setShelf}
                  book={b}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
