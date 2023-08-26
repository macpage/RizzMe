const express = require('express');
const app = express();
const cors = require('cors');
const mogoose = require('mongoose');
const { default: mongoose } = require('mongoose');
const userModel = require('./model/user');
const ImageModel = require('./model/image');
const multer = require('multer');
const path = require('path');

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/Users/mac/repos/RizzMe/backend/public/images');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.filename + '_' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  console.log(req.body.name);
  console.log(req.body.index);
  ImageModel.create({
    image: req.file.filename,
    username: req.body.name,
    index: req.body.index,
  })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.get('/getImage', (req, res) => {
  ImageModel.find()
    .then((images) => res.json(images))
    .catch((err) => res.json(err));
});

app.listen(3004, () => {
  console.log('server läuft');
});
app.get('/deleteImage', (req, res) => {
  console.log(req.query);
  console.log(req.query.name);
  ImageModel.deleteMany({ index: req.query.index, username: req.query.name })
    .then((images) => res.json(images))
    .catch((err) => res.json(err));
});
