'use strict';

var app = app || {};

(function (module) {
  const githubController = {};

  githubController.all = [];

  githubController.handleGithubNav = function () {
    $('article').hide();
    $('#aboutMe').hide();
    $('article').map(function () {
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
        Authorization: 'token e9dfa7c179292320e3098ba7331359e905491c10'
      }
    })
    .then(function (data) {
      githubController.all = data;
      app.viewRepos.initIndexPage();
    });
  };

  module.githubController = githubController;
})(app);
