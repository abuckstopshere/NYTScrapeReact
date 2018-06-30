import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";

export default class Dashboard extends Component {
  state = {
    posts: []
  };

  componentDidMount = () => {
    this.grabArticles();
  };

  grabArticles = () => {
    axios
      .get("/api/getSavedArticles")
      .then(response => {
        const articles = [];
        response.data.map(article => {
          return articles.push(article);
        });

        this.setState({ posts: articles });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteArticle = title => {
    return () => {
      const article = {
        title: title
      };
      axios
        .post("/api/deleteArticle", article)
        .then(response => {
          this.grabArticles();
        })
        .catch(error => {
          console.log(error);
        });
    };
  };

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          link={post.link}
          summary={post.summary}
          id={post.id}
          delete={this.deleteArticle(post.title)}
        />
      );
    });
    return (
      <div>
        {this.state.posts.length > 0 ? (
          <div>{posts}</div>
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    );
  }
}
