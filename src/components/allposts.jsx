import {useState,useEffect } from 'react';
import {fetchAllPosts} from "../API";
import {Link} from 'react-router-dom'
// import {PostListName} from "./postlistname"

export default function AllPosts (){
    const [posts, setPosts] =useState ([]);
    const [error, setError] = useState (null);
    const [searchParam,setSearchParam]=useState("");
    
    
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

    const postsToDisplay=searchParam ? posts.filter((post)=>
        post.title.toLowerCase().includes(searchParam)
    ):[];
        
    return(
        <div>
            <div className='searchBox'>
                <label >
                    Search: {""}
                    <input 
                        type="text"
                        placeholder="search"
                        onChange={(e)=>setSearchParam(e.target.value.toLowerCase())}/>
                </label>
            </div>
            <div>
                <Link to = '/newpostform'>
                    <button className='newPostButton'>Add a Post</button>
                </Link>
            </div>
            <div >
                {searchParam === "" ? (posts.map((post)=>(
                        <div className="allPostsBox">
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <h5>{post.price}</h5>
                            <h4>Username: {post.author.username}</h4>
                            <h4>{post.location}</h4>
                        </div>

                    )))
                : (postsToDisplay.map((post) =>
                (<div className="searchPostsBox">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <h5>{post.price}</h5>
                    <h4>Username: {post.author.username}</h4>
                      <h4>{post.location}</h4>
                 </div>
                )))

                }
            </div>
        </div>
    );
}