import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout as logoutAction} from '../redux/authenticate';
import {useEffect} from 'react';

export default function Logout(){
    const dispatch=useDispatch();

    useEffect(()=>{
        const logout=async()=> {
            try{
                const result=await dispatch(logoutAction());
        }
        catch (error){
            console.error(error);
        }
    logout ();}
},[dispatch]);
    
    return (
        <>
        <div>
            <h2>You have successfully logged out!</h2>
        </div>
        <div>
            <Link to = '/'>
            <button className='loginAgain'>Login with different account</button>
            </Link>
        </div>
        </>)
}
