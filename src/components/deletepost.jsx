import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'

const COHORT = "2306-GHP-ET-WEB-FT-SF";
const baseUrl = `https://strangers-things.herokuapp.com/api/${COHORT}`;

let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0MDllZjU1NWQyZjAwMTQ5ZDhiZWYiLCJ1c2VybmFtZSI6ImltdGVzdGluZ2hlcmUiLCJpYXQiOjE2OTI2Njk4MTN9.a02ojOiOQNvwnjWIu2apqZtARkMPF0xsjale4l8MJBw"


export default function NewPostForm({posts,setPosts}){
    const [title,setTitle]=useState("");
    const [description, setDescription]=useState("");
    const [price,setPrice]=useState("");
    const [location, setLocation]=useState("");
    const [error,setError]=useState(null);
    const navigate = useNavigate();


    async function handleSubmit (e){
      e.preventDefault();
      let postData={
        title:title,
        description: description,
        price:price,
        location:location
      }

      try {
        const response = await fetch(`${baseUrl}/posts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            post: postData
              
          })
        });
        const result = await response.json();
        console.log(result);

         if (result.success){
          const newPostList=[...posts,result.data.post];
          setPosts(newPostList);
          setTitle("");
          setDescription("");
          setPrice("");
          setLocation("");
          navigate('/posts');
          return null;
        } 
         
         else{
          setError ("Oops, something went wrong with adding that post!");
      } 
      return result;
    }
      catch (err) {
        console.error(err);
      }
    }

    return(
        <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <input
          value={title}
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={description}
          type="text"
          name="description"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          value={price}
          type="text"
          name="price"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />        
        <input
          value={location}
          type="text"
          name="location"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <Link to='/posts'>
        <button>Submit</button>
        </Link>
      </form>
    );
  }
