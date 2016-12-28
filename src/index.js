var page = require('page');

var main = document.getElementById('main-container');

page('/', function(ctx, next){
  main.innerHTML = 'Home <a href="/signup">signup</a>'; //diga home
});

page('/signup', function(ctx, next){
  main.innerHTML = 'signup <a href="/">home</a>';
});

page();
