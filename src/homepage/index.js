var page = require('page');
var empty = require('empty-element');
var title = require('title');
var template = require('./template');

page('/', function(ctx, next) {
    title('Platzigram');
    var main = document.getElementById('main-container');
    empty(main).appendChild(template);
});
