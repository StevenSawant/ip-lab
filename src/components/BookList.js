import React from 'react';
import BookReview from './BookReview';

function BookList({ books, addReview }) {
  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book.id} className="card my-3">
          <div className="card-body">
            <h2>{book.title}</h2>
            <h5>Reviews:</h5>
            <ul style={{listStyle: 'none'}}>
              {book.reviews.length > 0 ? (
                book.reviews.map((review, idx) => <li key={idx}>{review}</li>)
              ) : (
                <li>No reviews yet.</li>
              )}
            </ul>
            <BookReview bookId={book.id} addReview={addReview} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
