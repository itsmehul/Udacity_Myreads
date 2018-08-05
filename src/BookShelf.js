import React from "react";
import BookShelfBook from "./BookShelfBook";

const BookShelf = (props) => {
  return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>             
                <BookShelfBook/>
              </li>
            </ol>
            </div>
        </div>
        
      </div>

  );
};

export default BookShelf;
