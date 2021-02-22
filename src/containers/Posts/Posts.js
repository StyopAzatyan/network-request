import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import requestData from "../../api/requestData"
import Button from '../../components/Button/Button';
import { getPosts } from '../../api/service';

import service from '../../api/service'

import "./Posts.scss";


const limit = 9;

export class Container extends Component {

    state = {
        posts: [],
        start: 0,
        hasMore: true,
        loading: true
    }

    
    componentDidMount(){
            service.getPosts(this.state.start,limit)
            .then(data =>{
                this.setState({
                    posts:data,
                    loading: false
                })
            })
    }

    // getPosts = () => {
    //     service.getPosts(this.state.start,limit)
    //         .then(data => {
    //             this.setState({
    //                 posts: data,
    //                 loading: false
    //             })
    //         })
    //         .catch(err => {

    //         })
    // }




    updatePost = () => {
        service.updatePost(1, { title: 'Another Title' })
            .then(data => {
                const newPosts = this.state.posts.map(el => {
                    if (el.id === data.id) {
                        return data;
                    }
                    return el;
                })
                this.setState({
                    posts: newPosts
                })
            })
    }



    createPost = () => {
        service.createPost({
            title: 'New Title',
            body: 'New body',
            userId: 1
        })
            .then(data => {
                this.setState({
                    posts: [...this.state.posts, data]
                })
            })
    }

    deletePost = (id) => {
        service.deletePost(id)
            .then(data => {
                this.setState({
                    posts: this.state.posts.filter((el) => {
                        return el.id != id;
                    })
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    getMore = () =>{
        const newStart = this.state.start + limit;
        this.setState({
            start: newStart
        })
        service.getPosts(this.state.start,limit)
        .then(data =>{
            this.setState({
                posts: [...this.state.posts, ...data],
                hasMore: data.length < limit ? false : true
            })
        })
    }


    render() {
        return (
            <div className="app-posts">
                {!this.state.loading ? (
                    <>
                    <button onClick={this.getPosts}>Get Posts</button>

                <div className="app-post__container">
                    {
                        this.state.posts.map(post => {
                            return <Post
                                key={post.id}
                                post={post}
                                className="app-posts__container__post"
                            />
                        })
                    }
                </div>
                    {/* <button onClick={this.createPost}>Create Post</button> */}
                    {/* <button onClick={this.updatePost}>Update Post</button> */}
                    {/* <button onClick={() => this.deletePost(5)}>Delete Post</button> */}
                    {this.state.hasMore &&<button onClick={this.getMore}>Get More</button>}
                </>
                ) : (
                    <div>Loading ...</div>
                )}
            </div>
        )
    }
}

export default Container;