import React from "react";
import BookShelfBook from "./BookShelfBook";

const BookShelf = props => {
  const { bookCategory } = props;
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookCategory.map(b => (
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
    </div>
  );
};

export default BookShelf;
