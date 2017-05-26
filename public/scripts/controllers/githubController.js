'use strict'

var app = app || {};

(function(module) {
  const githubController = {};

  githubController.all = [];

  githubController.handleGithubNav = function() {
    $('article').hide();
    $('#aboutMe').hide();
    $('article').map(function(){
    if ($(this).data('category') === 'Github') {
      $(this).fadeIn();
      }
    });
  };

  githubController.repos = function () {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${myGithubToken}`
      }
    })
    .then(function(data) {
      githubController.all = data;
      callback();
    })

  }

  module.githubController = githubController;
})(app);
