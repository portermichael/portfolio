'use strict';
var app = app || {};

(function (module) {
  Article.articles = [];

// object constructor
  function Article (allArticlesObj) {
    this.title = allArticlesObj.title
    this.linkedUrl = allArticlesObj.linkedUrl
    this.createdDate = allArticlesObj.createdDate
    this.lastEditedDate = allArticlesObj.lastEditedDate
    this.category = allArticlesObj.category
    this.articleContent = allArticlesObj.articleContent
  }

  Article.prototype.toHtml = function () {
    let articleTemplate = $('#articleTemplate').html();
    let compileArticle = Handlebars.compile(articleTemplate);

    this.daysAgo = parseInt(Math.floor((new Date() - new Date(this.createdDate)) / 60 / 60 / 24 / 1000));
    this.publishStatus = this.createdDate ? `published ${this.daysAgo} days ago` : '(draft)';
    this.eCount = this.articleContent.match(/e/gi).length;

    return compileArticle(this);
  };

  Article.eCount = function () {
    return Article.articles.map(function (article) {
      return article.articleContent.match(/e/gi).length;
    })
      .reduce(function (a, b) { return a + b });
  };

  Article.loadAll = function (allArticles) {
    allArticles.sort(function (a, b) {
      return (new Date(b.lastEditedDate) - new Date(a.lastEditedDate));
    });

    allArticles.map(function (articleObj) {
      Article.articles.push(new Article(articleObj));
    });
  };

  Article.getAllOfThem = function () {
    $.ajax({
      url: '/data/blogArticles.json',
      method: 'HEAD',
      error: function () {
        console.log('An error has occurred.');
      },
      success: function (data, message, xhr) {
        let eTag = xhr.getResponseHeader('ETag');
        if (localStorage.eTag === eTag) {
          Article.loadAll(JSON.parse(localStorage.allArticlesObj))
          app.viewArticles.initIndexPage();
        } else {
          $.getJSON('data/blogArticles.json').then(function (data) {
            localStorage.allArticlesObj = JSON.stringify(data);
            localStorage.eTag = eTag;
            Article.loadAll(data);
            app.viewArticles.initIndexPage();
          }, function (err) {
            console.error(err);
          })
        };
      }},
  )
  };

  module.Article = Article;
})(app);
