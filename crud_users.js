const express = require('express');
const app = express();
const port = 82;

const users = [];

app.use(express.json());

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  if (!user) {
    return res.status(404).send('User not found');
  }

  res.json(user);
});

app.put('/users/:id', (req, res) => {
  const userIndex = users.findIndex((user) => user.id === req.params.id);

  if (userIndex === -1) {
    return res.status(404).send('User not found');
  }

  const updates = req.body;
  const updatedUser = { ...users[userIndex], ...updates };
  users[userIndex] = updatedUser;
  res.json(updatedUser);
});

app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex((user) => user.id === req.params.id);

  if (userIndex === -1) {
    return res.status(404).send('User not found');
  }

  users.splice(userIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`User management API listening at http://localhost:${port}`);
});