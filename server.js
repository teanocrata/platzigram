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

    setTimeout(() => res.send(pictures), 2000);
});

app.get('/api/users/:userId', function(req, res) {

    var users = {
        mariaisabelmunozordonez: {
            username: 'mariaisabelmunozordonez',
            avatar: 'https://pbs.twimg.com/profile_images/1227097907/Sv6FQ2MO',
            pictures: [{
                    id: 1,
                    src: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/13129218_1692859530968044_751360067_n.jpg?ig_cache_key=MTI0MjIzMTY4MzQ5NzU1MTQxOQ%3D%3D.2.c',
                    likes: 3
                },
                {
                    id: 2,
                    src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/13126768_259576907723683_861119732_n.jpg?ig_cache_key=MTIzODYzMjE4NDk1NDk3MTY5OQ%3D%3D.2',
                    likes: 1
                },
                {
                    id: 3,
                    src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/s640x640/sh0.08/e35/13118139_1705318183067891_1113349381_n.jpg?ig_cache_key=MTI0MTQwNzk1ODEyODc0ODQ5MQ%3D%3D.2',
                    likes: 10
                },
                {
                    id: 4,
                    src: 'https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/12940327_1784772678421526_1500743370_n.jpg?ig_cache_key=MTIyMzQxODEwNTQ4MzE5MjE4OQ%3D%3D.2',
                    likes: 0
                },
                {
                    id: 5,
                    src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/t51.2885-15/e35/11934723_222119064823256_2005955609_n.jpg?ig_cache_key=MTIyMzQwOTg2OTkwODU2NzY1MA%3D%3D.2',
                    likes: 23
                },
                {
                    id: 6,
                    src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/12904985_475045592684864_301128546_n.jpg?ig_cache_key=MTIyMzQwNjg2NDA5NDE2MDM5NA%3D%3D.2',
                    likes: 11
                }
            ]
        },
        SaaMP3: {
            username: 'SaaMP3',
            avatar: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/c0.13.160.160/p160x160/30435_1356194596748_7288944_n.jpg?oh=d0f810f4d19b7d2a7b860a3fc07f5e5f&oe=591AF9BD',
            pictures: [{
                    id: 1,
                    src: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/13129218_1692859530968044_751360067_n.jpg?ig_cache_key=MTI0MjIzMTY4MzQ5NzU1MTQxOQ%3D%3D.2.c',
                    likes: 3
                },
                {
                    id: 2,
                    src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/13126768_259576907723683_861119732_n.jpg?ig_cache_key=MTIzODYzMjE4NDk1NDk3MTY5OQ%3D%3D.2',
                    likes: 1
                },
                {
                    id: 3,
                    src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/s640x640/sh0.08/e35/13118139_1705318183067891_1113349381_n.jpg?ig_cache_key=MTI0MTQwNzk1ODEyODc0ODQ5MQ%3D%3D.2',
                    likes: 10
                },
                {
                    id: 4,
                    src: 'https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/12940327_1784772678421526_1500743370_n.jpg?ig_cache_key=MTIyMzQxODEwNTQ4MzE5MjE4OQ%3D%3D.2',
                    likes: 0
                },
                {
                    id: 5,
                    src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/t51.2885-15/e35/11934723_222119064823256_2005955609_n.jpg?ig_cache_key=MTIyMzQwOTg2OTkwODU2NzY1MA%3D%3D.2',
                    likes: 23
                },
                {
                    id: 6,
                    src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/12904985_475045592684864_301128546_n.jpg?ig_cache_key=MTIyMzQwNjg2NDA5NDE2MDM5NA%3D%3D.2',
                    likes: 11
                }
            ]
        }
    };

    res.send(users[req.params.userId] ? users[req.params.userId] : {});
});

app.post('/api/pictures', function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.send(500, "Error uploading file");
        }
        res.send('File uploaded successfully');
    });
});

app.get('/:userId', function(req, res) {
    var userId = req.params.userId;
    res.render('index', {
        title: 'Platzigram - Usuario'
    });
});

app.listen(3000, function(err) {
    if (err) return console.log('Hubo un error'), process.exit(1);

    console.log('platzigram escuchando en el puerto 3000');
});
