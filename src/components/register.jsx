import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {registerUser} from '../API/index'
import {Link} from 'react-router-dom';
// import {register as registerAction} from '../redux/authenticate'

export default function Register ({setToken}){
    const [username, setUsername]=useState ("");
    const [password, setPassword]=useState ("");
    const [error, setError]=useState (null);
    const[success,setSuccess]=useState("");
    const dispatch=useDispatch();
  

    async function handleSubmit (event){
        event.preventDefault();
        console.log(username,password);
        const register=await registerUser(username,password);
        setToken(register.data.token);
        console.log(register);
        setUsername('');
        setPassword('');
        nav('/');

    //     try{
    //         const response = await fetch (`${baseUrl}/users/register`,{
    //             method:"POST",
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             body: JSON.stringify ({user: 
    //                 {username,password}},
    //             )
    //         });
    //             const result = await response.json();

    //             if (result.success){
    //                 dispatch (registerAction({
    //                     username:result.data.username,
    //                     token:result.data.token,
    //                 }));
    //                 setSuccess ("Registration successful!");
    //                 console.log(setSuccess)
    //             }else{
    //                 setError(result.error.message);
    //             }

    //         return result;
    //         console.log(result)

        
    //     }   catch (error){
    //         console.error (error);
    //     }
    }

    return(
        
        <div>
            <h2>Register</h2>{
                error && <p>{error}</p>
            }
            {success&&<p>{success}</p>}
            <form className='registerForm' onSubmit={handleSubmit}>
                <label>
                    Username: {""}
                    <input 
                        value={username}
                        onChange={(e)=>{
                            setUsername(e.target.value);
                                setError(null);
                                setSuccess("");
                        }}
                    />
                </label>
                <label className='registerFormPassword'>
                    Password: {""} 
                        <input 
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value);
                                setError(null);
                                setSuccess("");
                            }}
                        />
                </label>
                <button className='registerSubmitButton' type="submit">Submit</button>
            </form>
            <Link to = '/'>
            <button className='backButton'>Back</button>
            </Link>
        </div>
    )

}