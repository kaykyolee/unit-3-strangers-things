import {useState,useEffect } from 'react';
import {fetchAllPosts} from "../API";

export default function AllPosts (){
    const [posts, setPosts] =useState ([]);
    const [error, setError] = useState (null);
    
    
    useEffect(()=>{
        async function getAllPosts (){
            const APIResponse=await fetchAllPosts();
            if (APIResponse.success){
                setPosts (APIResponse.data.posts);
            } else{
                setError(APIResponse.error.message);
            }
        }
        getAllPosts();
    }, []);

        
    return(
        <div>
            <div >
                {posts.map((post)=>{
                    return(
                        <>
                        <div className="allPostsBox">
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <h5>{post.price}</h5>
                            <h4>Username: {post.author.username}</h4>
                            <h4>{post.location}</h4>
                        </div>
                        </>
                    )

                })}
            </div>
        </div>
    );
}