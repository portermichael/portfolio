'use strict'

var app = app || {};

(function(module) {
  const githubController = {};

  githubController.handleGithubNav = function() {
    $('article').hide();
    $('#aboutMe').hide();
    $('article').map(function(){
    if ($(this).data('category') === 'Github') {
      $(this).fadeIn();
      }
    });
  };

  module.githubController = githubController;
})(app);
