// import React from 'react';
// import {useNavigate} from 'react-router-dom';
// import {deletepost} from '../API';

// export default function PostCard ({post}){
//     const navigate = useNavigate();

//     async function handleDelete(){
//         try{
//             const result = await deletePost (post._id);
//             console.log (result);
//             navigate("/");
//         }catch (error){
//             console.error (error);
//         }
//     }

//     return (
//         <div>
//                 <h3>{post.title}</h3>
//                 <p>{post.description}</p>
//                 <h5>{post.price}</h5>
//                 <h4>Username: {post.author.username}</h4>
//                 <h4>{post.location}</h4>
//                 <button onClick={handleDelete}>Delete Post</button>
//         </div>
//     )
// }