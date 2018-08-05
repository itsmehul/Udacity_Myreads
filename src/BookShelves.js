import React from 'react';
import BookShelf from './BookShelf';

const BookShelves = () => {
  return (
    <div className="list-books-content">
        <BookShelf title={'Currently Reading'}/>
        <BookShelf title={'Want to Read'}/>
        <BookShelf title={'Read'}/>
    </div>
  );
}

export default BookShelves;