import React, { Component } from 'react';
import {  connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {

  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return _.map(this.props.posts, post => {
      console.log(post);
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {

    return (
      <div>
        <div className='text-xs-right'>
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    posts: state.posts
  };
}

const mapDispatchToProps = (dispatch) => {

  return {
    fetchPosts
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
