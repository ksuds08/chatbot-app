const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello! I am a chatbot.');
});

app.listen(port, () => {
  console.log(`Chatbot app listening at http://localhost:${port}`);
});