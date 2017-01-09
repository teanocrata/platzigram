import yo from 'yo-yo'
import layout from '../layout'
import picture from '../picture-card'
import translate from '../translate'
import request from 'superagent'

export default function userPageTemplate(user){
  var el = yo `<article class="container user-page">
    <div class="row">
      <header class="col s12 m10 offset-m1 l8 offset-l2 center-align heading">
        <div class="row">
          <div class="col s12 m10 offset-m1 l3 offse-l3 center">
            <img class="responsive-img circle profile-avatar" src="${user.avatar}"/>
          </div>
          <div class="col s12 m10 offset-m1 l6 left-align">
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
        </div>
      </header>
      <div class="col">
        <div class="row">
          ${user.pictures.map(function(picture){
            return yo`<div class="col s12 m6 l4">
              <div class="picture-container">
                <img src=${picture.url} class="picture"/>
                <div class="likes"><i class="fa fa-heart"></i> ${picture.likes}</div>
              </div>
            </div>`;
          })}
        </div>
      </div>
    </div>
  </article>`;

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

}
