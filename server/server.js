const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

let reviews = [];

app.get('/reviews', (req, res) => {
  res.json(reviews);
});

app.post('/reviews', (req, res) => {
    const { book, review } = req.body;
    reviews.push({ book, review });
    console.log(reviews); // Log the reviews to the console
    res.status(201).json({ message: 'Review added' });
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
