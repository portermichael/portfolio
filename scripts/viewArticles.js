'use strict'

var viewArticles = [];

//nav button functionality
viewArticles.mainNav = function() {
  $('#aboutMe').hide();
  $('li.tab').on('click', function(event){
    event.preventDefault();
    //show all articles and hide about
    var dataContent = $(this).data('content')
    if(dataContent === 'home') {
      $('#aboutMe').hide();
      $('article').fadeIn();
    }
    //show about and hide all articles
    else if (dataContent === 'about') {
      $('article').hide();
      $('#aboutMe').fadeIn();
    }
    //hide all articles and about and show only those with category blog
    else if (dataContent === 'blog') {
      $('article').hide();
      $('#aboutMe').hide();
      $('article').each(function(){
        if ($(this).data('category') === 'Blog') {
          $(this).fadeIn();
        }
      });
    }
    //hide all articles and about and show only those with category blog
    else if (dataContent === 'projects') {
      $('article').hide();
      $('#aboutMe').hide();
      $('article').each(function(){
        if ($(this).data('category') === 'Github') {
          $(this).fadeIn();
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
      $(this).prev().children().slideDown(1250, 'easeOutBounce');
      $(this).html('Read less ←');
      $(this).blur();
    } else if ($(this).html() === 'Read less ←') {
      $('.article-body *:nth-of-type(n+2)').slideUp();
      $(this).html('Read more →');
      $(this).blur();
    }
  });
};

//hamburger functionality
viewArticles.hamburgerTab = function () {
  $('.fa-bars').on('click', function(){
    $('li').toggleClass('fabtab');
  });
}

$(document).ready(function() {
  viewArticles.mainNav();
  viewArticles.shortenText();
  viewArticles.hamburgerTab();
});
