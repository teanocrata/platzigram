var express = require('express');
var multer  = require('multer');
var fileExtension = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + fileExtension(file.originalname));
  }
});

var upload = multer({ storage: storage }).single('picture');

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

    setTimeout(function() {
        res.send(pictures);
    }, 2000);

});

app.post('/api/pictures', function(req, res){
  upload(req, res, function(err){
    if(err){
      return res.send(500, "Error uploading file");
    }
    res.send('File uploaded successfully');
  });
});

app.listen(3000, function(err) {
    if (err) return console.log('Hubo un error'), process.exit(1);

    console.log('platzigram escuchando en el puerto 3000');
});
