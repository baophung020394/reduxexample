import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';


class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => 
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        );
        return (
            <div>
            <h1>Post</h1>
            {postItems}
            </div>
        )
    }
}

Posts.proTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};
const mapStatetoProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});
export default connect(mapStatetoProps, { fetchPosts })(Posts);