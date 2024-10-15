import React, { useState } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'React Basics', reviews: ['Great intro to React!', 'Very detailed.'] },
    { id: 2, title: 'Advanced React', reviews: ['Deep dive into React concepts.', 'Helped me a lot.'] },
    { id: 3, title: 'JavaScript Essentials', reviews: ['Must-read for JS beginners!', 'Highly recommend.'] },
  ]);

  const addBook = (title) => {
    const newBook = { id: books.length + 1, title, reviews: [] };
    setBooks([...books, newBook]);
  };

  const addReview = (bookId, review) => {
    setBooks(books.map(book =>
      book.id === bookId ? { ...book, reviews: [...book.reviews, review] } : book
    ));
  };

  return (
    <div className="App container">
      <Header />
      <BookList books={books} addReview={addReview} />
      <AddBook addBook={addBook} />
    </div>
  );
}

export default App;
