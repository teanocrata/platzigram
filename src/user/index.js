import page from 'page'
import header from '../header'
import title from 'title'
import empty from 'empty-element'
import template from './template'

var request = require('superagent');

require('whatwg-fetch');

page('/:userId', header, loadUser, function(ctx, next) {
    title(ctx.user.fullname);
    var main = document.getElementById('main-container');

    empty(main).appendChild(template(ctx.user));
});

async function loadUser(ctx, next) {
    try {
        ctx.user = await fetch('/api/users/' + ctx.params.userId).then(res => res.json());
        next();
    } catch (err) {
        console.log(err);
    }
}
