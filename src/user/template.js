var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');
var translate = require('../translate');
var request = require('superagent');

module.exports = function(user, pictures){
 var el = yo `<article class="container">
    <header class="row valign-wrapper">
      <div class="col s4">
        <img class="responsive-img circle profile-avatar" src="${user.avatar}"/>
      </div>
      <div class="col s8">
        <div class="row valign-wrapper">
          <div class="col s9">
          <h1 class="truncate profile-username">${user.username}</h1>
          </div>
          <div class="col s2">
          <a class="waves-effect waves-light btn transparent grey-text z-depth-0">${translate.message('edit-profile')}</a>
          </div>
          <div class="col s1">
          <a class="waves-effect waves-light btn transparent grey-text z-depth-0"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
          </div>
        </div>
        <div class="row valign-wrapper">
          <div class="col s4 likes">${translate.message('posts', {posts: user.posts})}</div>
          <div class="col s4 likes">${translate.message('follower', {follower: user.follower})}</div>
          <div class="col s4 likes">${translate.message('following', {following: user.following})}</div>
        </div>
        <div class="row">
          <h2 class="profile-fullname">${user.fullname}</h2>
        </div>
      </div>
    </header>
    <div class="row">
        ${pictures.map(function(pic){
          return grid(picture(pic));
        })}
    </div>
  </article>`;

  function grid(content){
    return yo`<div class="col s4">${content}</div>`;
  }

  function cancel(){
    toggleButtons();
    document.getElementById('form-upload').reset();
  }

  function toggleButtons(){
    document.getElementById('fileName').classList.toggle('hide');
    document.getElementById('btnUpload').classList.toggle('hide');
    document.getElementById('btnCancel').classList.toggle('hide');
  }

  function onchange(){
    toggleButtons();
  }

  function onsubmit(ev){
    ev.preventDefault();

    var data = new FormData(this);
    request
      .post('/api/pictures')
      .send(data)
      .end(function (err, res){
        console.log(arguments);
      })

  }


  return layout(el);
};
