import {useState} from 'react';

const COHORT="2306-GHP-ET-WEB-FT-SF";
const baseUrl=`https://strangers-things.herokuapp.com/api/${COHORT}`;

export default function Register (props){
    const [username, setUsername]=useState ("");
    const [password, setPassword]=useState ("");
    const [error, setError]=useState (null);
    const [usernameError, setUsernameError]=useState (null);

    async function handleSubmit (event){
        event.preventDefault();

        try{
            const response = await fetch (`${baseUrl}/users/register`,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify ({user: {username,password}},
                )
            });
                const result = await response.json();
                console.log(result)
            return result;
            console.log(result)
        }   catch (error){
            console.error (error);
        }
    }

    return(
        
        <div>
            <h2>Register</h2>{
                error && <p>{error}</p>
            }
            <form className='registerForm' onSubmit={handleSubmit}>
                <label>
                    Username: {""}
                    <input 
                        value={username}
                        onChange={(e)=>{
                            setUsername(e.target.value);
                            setUsernameError(null);
                        }}
                    />
                </label>
                <label className='registerFormPassword'>
                    Password: {""} 
                        <input 
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                        />
                </label>
                <button className='registerSubmitButton' type="submit">Submit</button>
            </form>
        </div>
    )

}