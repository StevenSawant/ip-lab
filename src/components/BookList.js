// src/components/BookList.js
import React, { Component } from 'react';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: ['JavaScript Essentials'],
      newBook: '',
      reviews: {} // Use an object to map books to reviews
    };
  }

  componentDidMount() {
    this.fetchReviews(); // Fetch existing reviews when component mounts
  }

  fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:5000/reviews'); // Fetch reviews from server
      const data = await response.json();
      // Transform the array into an object for easy lookup
      const reviewsMap = data.reduce((acc, { book, review }) => {
        acc[book] = review;
        return acc;
      }, {});
      this.setState({ reviews: reviewsMap }); // Update state with fetched reviews
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  handleInputChange = (event) => {
    this.setState({ newBook: event.target.value });
  };

  addBook = () => {
    if (this.state.newBook) {
      this.setState((prevState) => ({
        books: [...prevState.books, prevState.newBook],
        reviews: { ...prevState.reviews, [prevState.newBook]: '' }, // Initialize empty review for new book
        newBook: ''
      }));
    }
  };

  handleReviewChange = (event, book) => {
    const review = event.target.value;
    this.setState((prevState) => ({
      reviews: { ...prevState.reviews, [book]: review } // Update review for the specific book
    }));
  };

  submitReview = async (book) => {
    const review = this.state.reviews[book]; // Get the review for the specific book

    try {
      // Send POST request to add review to the server
      await fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ book, review }),
      });

      // Fetch updated reviews after adding
      this.fetchReviews();
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  render() {
    return (
      <section id="books" className="container my-5">
        <h2 className="text-center mb-4">Books to Review</h2>
        {this.state.books.map((book, index) => (
          <div className="card mb-3" key={index}>
            <div className="card-body">
              <h3 className="card-title">{book}</h3>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Add your review"
                value={this.state.reviews[book] || ''} // Display current review
                onChange={(e) => this.handleReviewChange(e, book)}
              />
              <button className="btn btn-primary" onClick={() => this.submitReview(book)}>Submit Review</button>
            </div>
          </div>
        ))}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book Title"
            value={this.state.newBook}
            onChange={this.handleInputChange}
          />
          <button className="btn btn-success" onClick={this.addBook}>Add Book</button>
        </div>
        <h4 className="text-center mt-4">Reviews:</h4>
        <ul className="list-group">
          {Object.entries(this.state.reviews).map(([book, review], index) => (
            <li key={index} className="list-group-item">
              <strong>{book}:</strong> {review}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default BookList;
