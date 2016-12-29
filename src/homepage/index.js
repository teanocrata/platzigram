var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next) {
    title('Platzigram');
    var main = document.getElementById('main-container');

    var pictures = [{
        user: {
            username: 'teanocrata',
            avatar: 'https://pbs.twimg.com/profile_images/1227097907/Sv6FQ2MO'
        },
        url: 'office.jpg',
        likes: 10,
        liked: true
    },
    {
        user: {
            username: 'teanocrata',
            avatar: 'https://pbs.twimg.com/profile_images/1227097907/Sv6FQ2MO'
        },
        url: 'office.jpg',
        likes: 2,
        liked: true
    }
  ];

    empty(main).appendChild(template(pictures));
});
