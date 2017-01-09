var express = require('express');
var multer = require('multer');
var fileExtension = require('file-extension');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, +Date.now() + '.' + fileExtension(file.originalname));
    }
});

var upload = multer({
    storage: storage
}).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Platzigram'
    });
});

app.get('/signup', function(req, res) {
    res.render('index', {
        title: 'Platzigram - Signup'
    });
});

app.get('/signin', function(req, res) {
    res.render('index', {
        title: 'Platzigram - Signin'
    });
});

app.get('/:userId', function(req, res) {
    var userId = req.params.userId;
    res.render('index', {
        title: 'Platzigram - Usuario'
    });
});

app.get('/api/pictures', function(req, res) {
    var pictures = [{
        user: {
            username: 'teanocrata',
            avatar: 'https://pbs.twimg.com/profile_images/1227097907/Sv6FQ2MO'
        },
        url: 'office.jpg',
        likes: 10,
        liked: false,
        createdAt: new Date().getTime()
    }, {
        user: {
            username: 'teanocrata',
            avatar: 'https://pbs.twimg.com/profile_images/1227097907/Sv6FQ2MO'
        },
        url: 'office.jpg',
        likes: 2,
        liked: true,
        createdAt: new Date().setDate(new Date().getDate() - 10)
    }];

    res.send(pictures);
});

app.get('/api/users/:userId', function(req, res) {

    var users = {mariaisabelmunozordonez: {
        username: 'mariaisabelmunozordonez',
        avatar: 'https://pbs.twimg.com/profile_images/1227097907/Sv6FQ2MO',
        posts: 0,
        follower: 1,
        following: 0,
        fullname: 'María Isabel Muñoz Ordóñez'
    }, SaaMP3: {
      username: 'SaaMP3',
      avatar: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/c0.13.160.160/p160x160/30435_1356194596748_7288944_n.jpg?oh=d0f810f4d19b7d2a7b860a3fc07f5e5f&oe=591AF9BD',
      posts: 3,
      follower: 2,
      following: 1,
      fullname: 'Samuel Rodríguez Rodríguez'
    }};

    res.send(users[req.params.userId]? users[req.params.userId]: {});
});

app.post('/api/pictures', function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.send(500, "Error uploading file");
        }
        res.send('File uploaded successfully');
    });
});

app.listen(3000, function(err) {
    if (err) return console.log('Hubo un error'), process.exit(1);

    console.log('platzigram escuchando en el puerto 3000');
});
