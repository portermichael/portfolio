'use strict';

var app = app || {};

(function (module) {
  const repo = {};

  repo.all = [];

  repo.repos = function () {
    $.ajax({
      url: '/github/user/repos',
      method: 'GET',
    })
    .then(function (data) {
      repo.all = data;
      app.viewRepos.initRepos();
    });
  };

  module.repo = repo;
})(app);
