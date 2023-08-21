// import React, {useState, useEffect} from 'react';
// import {useParams} from 'react-router-dom';
// import { fetchSinglePost } from '../API';
// import PostCard from './postcard'

export default function SinglePost(){
    return(
        <h1>this is singlepost</h1>
    )
}

// export default function SinglePost(posts){
//     const {post._id} = useParams();

//     const [player, setPlayer]= useState (null);
//     const [error,setError]= useState (null);

//     useEffect(() =>{
//         async function getSinglePost(){
//             const APIResponse = await fetchSinglePost(post._id);
//             if (APIResponse.success){
//                 setPlayer (APIResponse.data.post);
//             } else{
//                 setError (error.message);
//             }
//         }
//         getSinglePost();
//     },[]);

//     return (
//         <div>
//             {error && <p>[error]</p>}
//             {/* {post && <PostCard post={post}/>} */}
//         </div>
//     );
// }