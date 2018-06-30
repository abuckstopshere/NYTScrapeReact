const express = require("express");
const path = require("path");
const articleScraper = require("./../../models/articlesModel");
const Article = require("./../../db/savedArticleSchema");

module.exports = app => {
  app.get("/api/posts", (req, res) => {
    console.log("hit scraped router");
    articleScraper(response => {
      res.send(response);
    });
  });

  app.post("/api/save", (req, res) => {
    const article = req.body;
    Article.create({
      title: article.title,
      link: article.link,
      summary: article.summary
    })
      .then(response => {
        res.send("completed");
        console.log("RESPONSE" + response);
      })
      .catch(error => {
        console.log(error);
      });
  });

  app.get("/api/getSavedArticles", (req, res) => {
    console.log("hit getsaved");
    Article.find((error, articles) => {
      console.log("ERROR SAVED ROUTE", error);
      res.send(articles);
    });
  });

  app.post("/api/deleteArticle", (req, res) => {
    const article = req.body;
    console.log(article.title, "ARTICLE");
    Article.deleteOne({ title: article.title }, error => {
      res.send("completed");
      console.log("ERROR DELETE ROUTE", error);
    });
  });
};
