import React from "react";
import "./../styles/Post.css";
import axios from "axios";

class Post extends React.Component {
  state = {
    button: true
  };
  saveArticles = () => {
    console.log("save hit!");
    const article = {
      title: this.props.title,
      link: this.props.link,
      summary: this.props.summary
    };
    axios
      .post("/api/save", article)
      .then(response => {
        this.setState({ button: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="article-container">
        <h1>{this.props.title}</h1>
        <p>
          Article Link: <a href={this.props.link}>Here</a>
        </p>
        <p>{this.props.summary}</p>
        {this.props.delete ? (
          <button onClick={this.props.delete}>Delete</button>
        ) : (
          <button onClick={this.saveArticles}>Save</button>
        )}
      </div>
    );
  }
}

export default Post;
