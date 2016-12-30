var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');
require('whatwg-fetch');

page('/', header, asyncLoad, function(ctx, next) {
    title('Platzigram');
    var main = document.getElementById('main-container');

    empty(main).appendChild(template(ctx.pictures));
});

function loadPictures(ctx, next) {
    fetch('/api/pictures')
        .then(function(res) {
            return res.json();
        })
        .then(function(pictures) {
            ctx.pictures = pictures;
            next();
        })
        .catch(function(err) {
            console.log(err);
        });
}

async function asyncLoad(ctx, next) {
    try {
        ctx.pictures = await fetch('/api/pictures').then(res => res.json());
        next();
    } catch (err) {
        console.log(err);
    }
}
