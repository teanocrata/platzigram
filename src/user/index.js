var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
require('whatwg-fetch');

page('/:userId', header, asyncLoad, function(ctx, next) {
    title(ctx.user.fullname);
    var main = document.getElementById('main-container');

    empty(main).appendChild(template(ctx.user, ctx.pictures));
});

async function asyncLoad(ctx, next) {
    try {
        ctx.user = await fetch('/api/users/' + ctx.params.userId).then(res => res.json());
        ctx.pictures = await fetch('/api/pictures').then(res => res.json());
        next();
    } catch (err) {
        console.log(err);
    }
}
