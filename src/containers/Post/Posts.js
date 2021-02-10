import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import requestData from "../../api/requestData"
import Button from '../../components/Button/Button';

import service from '../../api/service'

import "./Posts.scss";


export class Container extends Component {

    state = {
        posts: []
    }

    // componentDidMount() {
    //     requestData('GET', 'https://jsonplaceholder.typicode.com/posts')
    //     .then(data =>{
    //         this.setState({
    //             posts: data
    //         })
    //     })
    // }

    // componentDidMount(){
    //     service.getAllPosts()
    //     .then(data =>{
    //         this.setState({
    //             posts: data
    //         })
    //     })
    //     .catch(err =>{

    //     })
    // }

    componentWillUnmount(){
        this.getAllPosts()
    }

    getAllPosts = () =>{
        service.getAllPosts()
        .then(data =>{
            this.setState({
                posts: data
            })
        })
        .catch(err =>{

        })
    }

    updatePost = () =>{
        service.updatePost(1, {title: 'Another Title'})
        .then(data =>{
            const newPosts = this.state.posts.map(el =>{
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



    createPost = () =>{
        service.createPost({
            title:'New Title',
            body: 'New body',
            userId: 1
        })
        .then(data =>{
            this.setState({
                posts:[...this.state.posts,data]
            })
        })
    }
    

    render() {
        return (
            <div className="app-posts">
                <button onClick={this.getAllPosts}>Get Posts</button>

                {
                    this.state.posts.map(post => {
                        return <Post
                            key={post.id}
                            post={post}
                        />
                    })
                }
                <button onClick={this.createPost}>Create Post</button>
                <button onClick={this.updatePost}>Update Post</button>
            </div>
        )
    }
}

export default Container;