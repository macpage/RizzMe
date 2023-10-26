const express = require('express');
const app = express();
const cors = require('cors');
const mogoose = require('mongoose');
const { default: mongoose } = require('mongoose');
const userModel = require('./model/user');
const ImageModel = require('./model/image');
const MatchSchema = require('./model/match');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

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
  console.log(req);
  console.log(req.query);
  console.log(req.query.name);
  console.log(req.query.pic);
  if (req.query.pic) {
    fs.unlink(
      '/Users/mac/repos/RizzMe/backend/public/images' + '/' + req.query.pic,
      (err) => {
        if (err) {
          throw err;
        }

        console.log('Delete File successfully.');
      }
    );
  }
  ImageModel.deleteMany({ index: req.query.index, username: req.query.name })
    .then((images) => res.json(images))
    .catch((err) => res.json(err));
});

app.get('/updateInfo', (req, res) => {
  console.log(req.query);
  userModel
    .findOneAndUpdate(
      { username: req.query.name },
      {
        height: req.query.height,
        gender: req.query.gender,
        age: req.query.age,
        tag_1: req.query.tag_1,
        tag_2: req.query.tag_2,
        tag_3: req.query.tag_3,
        searchTag: req.query.searchTag,
      }
    )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get('/getInfos', (req, res) => {
  userModel
    .find()
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get('/updateLiked', (req, res) => {
  userModel
    .findOneAndUpdate(
      { username: req.query.username },
      {
        liked: req.query.liked,
      }
    )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get('/getLiked', (req, res) => {
  userModel
    .findOne({ username: req.query.username })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.post('/addLike', async (req, res) => {
  let id;
  console.log('broo');
  console.log(req.body.liked[0]);
  console.log('finding user');
  console.log(req.body.username);
  const user = await userModel.findOne({ username: req.body.username });
  console.log(user);
  const Match = new MatchSchema({
    userID: user.id,
    likedUserID: req.body.liked[0],
  });

  Match.save();
});

app.post('/user', (req, res) => {});
