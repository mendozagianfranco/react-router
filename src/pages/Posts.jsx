import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Posts() {
    const [postsData, setPostsData] = useState([]);

    const endpoint = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        axios.get(endpoint)
            .then(res => {
                setPostsData(res.data);
            });
    }, []);

    return (
        <>
            <h1>Posts</h1>
            {postsData.map(post => <div className='card-post' key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>)}
        </>
    );
}