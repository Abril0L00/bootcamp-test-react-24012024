
import { useEffect, useState } from "react";
import { PostsList } from "./PostsList";
import { PostCreate } from "./PostCreate";

export const PostsIndex = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const handleFetchPosts = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setPosts(data);
        setIsLoading(false);
    }

    useEffect(() => {
        /* handleFetchRandomNumber().then(number => setNumber(number)); */
        handleFetchPosts();
    },[]);

    return (
        <>
        <div>
            {
                isLoading && (
                    <h1>Loading ....</h1>
                )
            }
            {
                !isLoading && (
                    <>
                    <h1>Posts</h1>
                    <PostCreate></PostCreate>
                    {
                        posts.map(post => (
                            <PostsList key={post.id} post={post}></PostsList>
                        ))
                    }
                    </>
                )
            }
        </div>
        </>
    );
}