import React, { useState } from 'react';

function AddBook({ addBook }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title);
    setTitle('');
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        <h3>Add a New Book</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
            className="form-control"
            required
          />
          <button type="submit" className="btn btn-success mt-2">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
