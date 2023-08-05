const express = require('express');
const app = express();
const cors = require('cors');
const mogoose = require('mongoose');
const { default: mongoose } = require('mongoose');
const userModel = require('./model/user');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/rizzme');

app.get('/', (req, res) => {
  userModel.find().then((users) => res.json(users));
});

app.post('/register', async (req, res) => {
  const user = new userModel(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  userModel.findOne({ username, password }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json('login!!!');
      } else {
        res.json('not login');
      }
    } else {
      res.json('user not found');
    }
  });
});

app.listen(3004, () => {
  console.log('server läuft');
});
