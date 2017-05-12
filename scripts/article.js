'use strict';

var articles = [];

function Article (allArticlesObj) {
  this.title = allArticlesObj.title
  this.linkedUrl = allArticlesObj.linkedUrl
  this.createdDate = allArticlesObj.createdDate
  this.lastEditedDate = allArticlesObj.lastEditedDate
  this.category = allArticlesObj.category
  this.articleContent = allArticlesObj.articleContent
}

Article.prototype.toHtml = function() {
  var $newArticle = $('.template').clone();
  $newArticle.removeClass('template');
  $newArticle.find('h3').html(this.title);
  $newArticle.find('.article-body').html(this.articleContent);
  if (this.linkedUrl !== undefined) {
    $newArticle.find('.category').attr('href', this.linkedUrl);
  } else if (this.linkedUrl === undefined ){
    $newArticle.find('.category').removeAttr('href');
  }
  $newArticle.find('.time p:first-child').html(this.lastEditedDate);
  $newArticle.find('.category').html(this.category);
  $newArticle.attr('data-content', this.category);
  $newArticle.find('.time p:last-child').html(this.createdDate);
  return $newArticle
};

allArticles.sort(function(a, b){
  return (new Date(b.lastEditedDate) - new Date (a.lastEditedDate));
});

allArticles.forEach(function(articleObj) {
  articles.push(new Article(articleObj));
});

articles.forEach(function(article){
  $('#articles').append(article.toHtml());
});
