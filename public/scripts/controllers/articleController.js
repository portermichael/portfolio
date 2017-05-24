'use strict'

var app = app || {};

(function(module) {
  const articleController = {};

  articleController.handleArticleNav = function() {
    app.Article.getAllOfThem();
    $('.content').hide();
    $(`#articles`).fadeIn();
};

  module.articleController = articleController;
})(app);
