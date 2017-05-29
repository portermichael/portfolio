'use strict';
var app = app || {};

(function (module) {
  const viewRepos = [];

  viewRepos.prototype.toHtml = function () {
    let render = Handlebars.compile($('#githubTemplate').html());
    return render(this);
  }

  viewRepos.initIndexPage = function () {
    app.githubController.all.map(function (githubArticle) {
      ('#articles').append(githubArticle.toHtml());
    });
  }

  module.viewRepos = viewRepos;
})(app);
