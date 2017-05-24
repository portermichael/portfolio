'use strict'
var app = app || {};

page('/', app.articleController.handleArticleNav);
// page('/new', newArticle.initNewArticlePage);
// page('/admin', adminView.initAdminPage);
page('/about', app.aboutController.handleAboutNav);

page();
