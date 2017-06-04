'use strict';

var app = app || {};

(function (module) {
  const articleController = {};

  articleController.handleArticleNav = function () {
    $('article').hide();
    $('#aboutMe').hide();
    $('article').fadeIn();
  };

  module.articleController = articleController;
})(app);
