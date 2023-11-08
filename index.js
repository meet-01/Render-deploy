const express = require('express');
const format = require('date-format');

const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
  res.status(201).send('YOLO!!');
});

app.get('/api/v1/instagram', (req, res) => {
  const instaSocial = {
    userName: 'meet16_',
    followers: 66,
    follows: 70,
    date: format.asString('dd/MM/yyyy', new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get('/api/v1/facebook', (req, res) => {
  const instaSocial = {
    userName: 'Meet',
    followers: 440,
    follows: 100,
    date: format.asString('dd/MM/yyyy', new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get('/api/v1/linkedin', (req, res) => {
  const instaSocial = {
    userName: 'Meet Master',
    followers: 100,
    follows: 50,
    date: format.asString('dd/MM/yyyy', new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get('/api/v1/:token', (req, res) => {
  console.log(req.params.token);
  res.status(200).json({param: req.params.token});
});

app.listen(PORT, () => {
  console.log(`you app is running on port ${PORT}`);
});
