import { useParams } from "react-router-dom";

const COHORT="2306-GHP-ET-WEB-FT-SF";
const baseUrl=`https://strangers-things.herokuapp.com/api/${COHORT}`;


export async function fetchAllPosts(){
    try{
        const response = await fetch (`${baseUrl}/posts`);
        const result = await response.json();
        return result;
    }   catch (error){
        console.error (error);
    }
}

// export async function fetchSinglePost ({post}){
//     try{
//         const {postId}= useParams();
//         const matchedPost = posts.find((post)=>{
//             return post._id==postId
//         });
//         console.log ("user.id",post._id)
//         const response = await fetch (`${baseUrl}/posts`,{
//             method:'GET',
//             headers: {
//                 'Content-Type':'application/json',
//                 'Authorization': `Bearer ${token}`,}
//             });
//         const result = await response.json ();
//         return result;
//     } catch (error){
//         console.error (error);
//     }
// }

// export default function SingleUser({ users }) {
//   const { userId } = useParams();
//   const matchedUser = users.find((user) => { 
//     return user.id == userId
//   });

//   return <h1>{matchedUser.name}: {userId}</h1>;
// }



// export async function deletePost(){
//     try{
//         const response=await fetch (`${baseUrl}/posts`,{
//             method:'DELETE',
//             headers: {
//                 'Content-Type':'application/json',
//                 'AUthorization':`Bearer ${TOKEN_STRING_HERE}`,
//             }});
//         const result = await response.json();
//         return result;
//     }catch (error){
//         console.error (error);
//     }
// }