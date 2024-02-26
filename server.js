const express = require('express');
const port = 3000;
const cors = require('cors');
const CustomError = require('./src/utils/customError');
const errorController = require('./src/controller/errorController');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/src/views/server.html');
});
app.use('/translate', require('./src/routes/translateRouter'));
app.all('*', (req, res, next) => {
  const err = new CustomError(
    `Can't find ${req.originalUrl} on the server!`,
    404
  );
  next(err);
});

// Global Error Handler
app.use(errorController);

app.listen(port, () => {
  console.log(` Translation app is running on port ${port}`);
});
