'use strict'

var app = app || {};

(function(module) {
  const articleController = {};

  articleController.handleArticleNav = function() {
    app.Article.getAllOfThem();
    $('article').hide();
    $('#aboutMe').hide();
    $('article').fadeIn();
};

  module.articleController = articleController;
})(app);
