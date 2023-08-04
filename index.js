const express = require('express');
const cors = require('cors')
const data = require('./dummy'); // Assuming ./dummy contains the necessary data

const app = express();

app.use(cors())

// Endpoint 1: Object
app.get('/object', (req, res) => {
  const obj = [{
    name: 'John Doe',
    age: 30,
    occupation: 'Engineer',
    sentence: 'The quick brown fox jumps over the lazy dog.',
    phrase: 'Hello, Welcome'
  }];
  res.send(obj);
});

/*// Endpoint 2: Sentence
app.get('/sentence', (req, res) => {
  const sentence = "The quick brown fox jumps over the lazy dog.";
  res.send(sentence);
});

// Endpoint 3: Word
app.get('/word', (req, res) => {
  const word = "Hello";
  res.send(word);
});

// Endpoint 4: Object 2
app.get('/object2', (req, res) => {
  const obj2 = [{
    fruit: 'Apple',
    color: 'Red',
    origin: 'Washington, USA'
  }];
  res.send(obj2);
});

// Endpoint 5: Sentence 2
app.get('/sentence2', (req, res) => {
  const sentence2 = "Node.js is a powerful JavaScript runtime environment.";
  res.send(sentence2);
});

// Endpoint 6: Separate file
app.get('/cars', (req, res) => {
  res.status(200).json(data); // Assuming `data` is defined and contains valid JSON data
});*/

const host = 'localhost';
const port = 4000;

app.get('/', (req, res) => {
  res.send('Welcome to the API'); // Corrected the root route response
});

app.listen(port, () => console.log(`API running at http://${host}:${port}`));
