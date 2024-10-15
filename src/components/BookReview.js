import React, { useState } from 'react';

function BookReview({ bookId, addReview }) {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(bookId, review);
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Add your review"
        className="form-control my-2"
        required
      />
      <button type="submit" className="btn btn-primary">Submit Review</button>
    </form>
  );
}

export default BookReview;
