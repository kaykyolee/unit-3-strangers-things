import { useParams } from "react-router-dom";
import { currentToken } from "../redux/authenticate";

const COHORT = "2306-GHP-ET-WEB-FT-SF";
const baseUrl = `https://strangers-things.herokuapp.com/api/${COHORT}`;


export const registerUser = async (username,password)=>{
  try {
    const response=await fetch(
      `${baseUrl}/users/register`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify ({
          user:{
            username,
            password
          }
        })
      }
    );
    const result = await response.json();
    console.log (result)
    return result 
  } catch (error) {
    
  }
}

export const login = async (username,password)=>{
  try {
    const response = await fetch (`${baseUrl}/users/login`, {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        user:(
          username, 
          password
        )
      })
    });
    const result = await response.json();
    console.log(result);
    return result     
  } catch (error) {
    
  }
}


export async function fetchAllPosts() {
  try {
    const response = await fetch(`${baseUrl}/posts`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0MDllZjU1NWQyZjAwMTQ5ZDhiZWYiLCJ1c2VybmFtZSI6ImltdGVzdGluZ2hlcmUiLCJpYXQiOjE2OTI2Njk4MTN9.a02ojOiOQNvwnjWIu2apqZtARkMPF0xsjale4l8MJBw"

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
