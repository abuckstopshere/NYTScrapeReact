import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";

export default class Dashboard extends Component {
  state = {
    posts: [],
    button: true
  };

  scrapeArticles = () => {
    axios.get("/api/posts").then(response => {
      const posts = [];
      for (let i = 0; i < 100; i++) {
        if (response.data[i].summary.length > 1 && response.data[i].link) {
          const trimmed = {
            title: response.data[i].title.trim(),
            link: response.data[i].link,
            summary: response.data[i].summary.trim(),
            id: i
          };
          posts.push(trimmed);
        }
      }

      this.setState({ posts: posts, button: false });
    });
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
        />
      );
    });
    return (
      <div>
        {this.state.button ? (
          <button onClick={this.scrapeArticles}>Scrape more articles!</button>
        ) : null}
        {posts}
      </div>
    );
  }
}
