import React, { Component } from 'react';

import PostDetail from '../post_details/PostDetail';
import cssClasses from './Post.module.css';

class Post extends Component {
  state = {
    posts: [],
    textTitle: '',
    textBody: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  changedHandle = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addToListhandle = e => {
    const post = [...this.state.posts];
    const id = post.length ? post[post.length - 1].id + 1 : 1;

    post.push({
      id: id,
      title: this.state.textTitle,
      body: this.state.textBody,
    });

    this.setState({
      posts: post,
      textTitle: '',
      textBody: '',
    });
  };

  deletedHandle = id => {
    const post = [...this.state.posts];
    this.setState({ posts: post.filter(post => post.id !== id) });
  };

  updatedHandleTitle = data => {
    const post = [...this.state.posts];
    const index = post.findIndex(post => post.id === data.id);
    post[index].title = data.title;
    this.setState({ posts: post });
  };

  updatedHandleBody = data => {
    const post = [...this.state.posts];
    const index = post.findIndex(post => post.id === data.id);
    post[index].body = data.body;
    this.setState({ posts: post });
  };

  render = () => {
    return (
      <div className={cssClasses.bodyTest}>
        <h1>Here is the post example!!!</h1>

        <input
          className={cssClasses.textTitle}
          type='text'
          name='textTitle'
          value={this.state.textTitle}
          onChange={this.changedHandle}
        />
        <input
          className={cssClasses.textBody}
          type='text'
          name='textBody'
          value={this.state.textBody}
          onChange={this.changedHandle}
        />

        <button
          className={cssClasses.buttonAddToList}
          onClick={this.addToListhandle}
        >
          Add to List
        </button>

        <ul className={cssClasses.postUnorderList}>
          {this.state.posts.map(post => (
            <PostDetail
              title={post.title}
              body={post.body}
              key={post.id}
              id={post.id}
              deletedHandle={this.deletedHandle}
              updatedHandleTitle={this.updatedHandleTitle}
              updatedHandleBody={this.updatedHandleBody}
            />
          ))}
        </ul>
      </div>
    );
  };
}

export default Post;
