'use strict';
var app = app || {};

(function (module) {
  const viewRepos = [];

  viewRepos.initRepos = function () {
    let render = Handlebars.compile($('#githubTemplate').html());
    $('#articles').append(app.repo.all.map(render));
  };

  module.viewRepos = viewRepos;
})(app);
