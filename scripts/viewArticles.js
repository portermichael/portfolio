'use strict'

var viewArticles = [];

//load articles from template

//separate articles based on category

//load about button

//nav button functionality
viewArticles.mainNav = function() {
  $('#aboutMe').hide();
  $('li.tab').on('click', function(){
    event.preventDefault();
    var dataContent = $(this).data('content')
    if(dataContent === 'home') {
      //show articles and hide about
      $('#articles').fadeIn();
      $('#aboutMe').hide();
    }
    else if (dataContent === 'about') {
      //show about and hide articles
      $('#aboutMe').fadeIn();
      $('#articles').hide();
    }
    //here
    else if (dataContent === 'blog') {
      //hide all articles
      $('article').hide();
      $('#aboutMe').hide();
      //show articles with category blog
      $('article').each(function(){
        if ($(this).data('category') === 'Blog') {
          $(this).show();
        }
      });
    }
    else if (dataContent === 'projects') {
    //hide all articles
      $('article').hide();
      $('#aboutMe').hide();
      //show articles with category github
      $('article').each(function(){
        if ($(this).data('category') === 'Github') {
          $(this).show();
        }
      });
    }
  });
};

viewArticles.shortenText = function () {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('#articles').on('click', '.read-more', function(event){
    event.preventDefault();
    if($(this).html() === 'Read more →') {
      $(this).prev().children().show();
      $(this).html('Read less ←');
      $(this).blur();
    } else if ($(this).html() === 'Read less ←') {
      $('.article-body *:nth-of-type(n+2)').hide();
      $(this).html('Read more →');
      $(this).blur();
    }
  });
};

$(document).ready(function() {
  viewArticles.mainNav();
  viewArticles.shortenText();
});
