'use strict';

var app = app || {};

(function (module) {
  const repo = {};

  repo.all = [];

  repo.repos = function () {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${myGithubToken}`
      }
    })
    .then(function (data) {
      repo.all = data;
      app.viewRepos.initRepos();
    });
  };

  module.repo = repo;
})(app);
