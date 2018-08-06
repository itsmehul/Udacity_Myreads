import React from 'react';
import BookShelf from './BookShelf';

const BookShelves = (props) => {
  const {collection} = props
  const currentlyReading = 
  collection.filter((c) => (
      c.shelf.includes('currentlyReading')
    ))
  const read = 
  collection.filter((c) => (
      c.shelf.includes('read')
    ))
  const wantToRead = 
  collection.filter((c) => (
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