import React from 'react';
import BookShelf from './BookShelf';

const BookShelves = (props) => {
  const {books} = props
  const currentlyReading = 
  books.filter((c) => (
      c.shelf.includes('currentlyReading')
    ))
  const read = 
  books.filter((c) => (
      c.shelf.includes('read')
    ))
  const wantToRead = 
  books.filter((c) => (
      c.shelf.includes('wantToRead')
    ))
  return (
    <div className="list-books-content">
        <BookShelf title={'Currently Reading'} bookCategory={currentlyReading}/>
        <BookShelf title={'Read'} bookCategory={read}/>
        <BookShelf title={'Want to Read'} bookCategory={wantToRead}/>
    </div>
  );
}

export default BookShelves;