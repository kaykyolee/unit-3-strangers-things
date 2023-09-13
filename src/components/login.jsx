import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react';
import {login} from '../API/index'
import {register as registerAction} from '../redux/authenticate';
import {useDispatch} from 'react-redux';

export default function Login ({setToken}){
    const [username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const [error, setError]=useState (null);
    const dispatch=useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        console.log (username,password);
        const register = await login (username,password);
        setToken(register.data.token);
        console.log (register);
        setUsername('');
        setPassword('');
        nav('/home');

    //     try {
    //         const response=await fetch(`${baseUrl}/users/login`,{
    //             method:"POST",
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             body: JSON.stringify ({user: 
    //                 {username,password,},
    //         })
    //         });
    //         const result=await response.json();
           
    //         if (result.success){
    //             dispatch (registerAction({
    //                 username:result.data.username,
    //                 token:result.data.token,
                    
    //             }));
    //             console.log(result.data.token)

    //             navigate('/home');
    //             return null;
    //         }else{
    //             setError("Incorrect login details, please check your username or password again.");
    //         }
    //         console.log(setError)
    //         return result;
    // }   
    //     catch (err){
    //         console.error (err);
    //     }
        }

        return (
    <div>

        <div className='loginBox'>
        <h1>Login </h1>{
                error && <p>{error}</p>
            }
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" name="username" value={username} onChange={e=>setUsername(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">LOG IN</button>
            </div>
        </form>
        </div>

        <div className='registerBox'>
            <h5>Are you a new user? </h5>
            <Link to = '/register'>
            <button className='registerButton'>Register Here</button>
            </Link>
        </div>
    </div>
    )
}