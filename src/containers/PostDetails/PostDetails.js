import service from '../../api/service';
import React, { Component } from 'react'
import Post from '../../components/Post/Post';

export class PostDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            post: null
        }
    }

    componentDidMount() {
        service.getPost(this.props.match.params.postId)
            .then(data => {
                this.setState({
                    post: data
                })
            })
    }


    render() {
        const { post } = this.state;
        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Post
                    post={this.state.post}

                />
            </div>
        )
    }
}

export default PostDetails;
