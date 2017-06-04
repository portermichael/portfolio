'use strict'

var app = app || {};

(function(module) {
  const blogController = {};

  blogController.handleBlogNav = function() {
    $('article').hide();
    $('#aboutMe').hide();
    $('article').map(function(){
    if ($(this).data('category') === 'Blog') {
      $(this).fadeIn();
      }
    });
  };

  module.blogController = blogController;
})(app);
