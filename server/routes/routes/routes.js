const express = require("express");
const path = require("path");
const articleScraper = require("./../../models/articlesModel");

module.exports = app => {
  app.get("/", (req, res) => {
    console.log("hit router");
    res.sendFile(path.join(__dirname + "./../../../build/index.html"));
  });
};
