const express = require('express');
const charRouter = require('./routes/characters');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/characters', charRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
