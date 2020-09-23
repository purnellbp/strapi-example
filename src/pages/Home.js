import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import Post from "../components/Post";

export default () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch('http://localhost:1337/posts')
            const data = await response.json()
            setPosts(data)
        }

        getPosts().then(r => null)

    }, [])

    return (
        <div className="Home">
            {posts.map(post => (
                <Link to={`/${post.id}`}>
                    <Post
                        id={post.id}
                        description={post.description}
                        likes={post.likes}
                        url={post.image && post.image.url}
                    />
                </Link>
            ))}
        </div>
    );
}
