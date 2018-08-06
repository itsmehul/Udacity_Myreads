import React from "react";

const BookShelfBook = props => {
  const { img, title, authors, shelf, setShelf, book } = props;

  const changeShelf = (book, shelf) => {
    setShelf(book, shelf);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${img})`
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={book.shelf || shelf}
            onChange={e => changeShelf(book, e.target.value)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default BookShelfBook;
