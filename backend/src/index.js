const express = require('express');
const charRouter = require('./routes/characters');

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/api/characters', charRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
