'use strict';

Article.articles = [];

function Article (allArticlesObj) {
  this.title = allArticlesObj.title
  this.linkedUrl = allArticlesObj.linkedUrl
  this.createdDate = allArticlesObj.createdDate
  this.lastEditedDate = allArticlesObj.lastEditedDate
  this.category = allArticlesObj.category
  this.articleContent = allArticlesObj.articleContent
}

Article.prototype.toHtml = function() {
  let articleTemplate = $('#articleTemplate').html();
  let compileArticle = Handlebars.compile(articleTemplate);

  this.daysAgo = parseInt(Math.floor((new Date() - new Date(this.createdDate))/60/60/24/1000));
  this.publishStatus = this.createdDate ? `published ${this.daysAgo} days ago` : '(draft)';

  return compileArticle(this);
};

Article.loadAll = function(allArticles){
  allArticles.sort(function(a, b){
    return (new Date(b.lastEditedDate) - new Date (a.lastEditedDate));
  });

  allArticles.forEach(function(articleObj) {
    articles.push(new Article(articleObj));
  });
};

Article.fetchAll = function() {
  $.ajax(
    url: '/data/blogArticles.json',
    method: 'HEAD',
    success: function(data, message, xhr) {
      eTag = xhr.getResponseHeader('ETag');
      if (localStorage.eTag === eTag){
        Article.loadAll(JSON.parse(localStorage.allArticles))
        //load tohtml?
      } else {
        $.getJSON('data/blogArticles.json').then(function(){
          localStorage.allArticles = JSON.stringify(data);
          localStorage.eTag = eTag;
          Article.loadAll(data);
          //load tohtml?
        }, function(err) {
          console.error(err);
        });
      }
    };
    error: function(){
      console.log('An error has occurred.')
    }
  )
}

Article.articles.forEach(function(article){
  $('#articles').append(article.toHtml());
});
