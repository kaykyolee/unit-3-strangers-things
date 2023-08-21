import React from 'react';
// import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {currentUser} from '../redux/authenticate';

//comments are my attempts at trying to generate user informration on the home page


export default function Home(){
    // const {user:currentUser}=useSelector((state)=>state.account);
    // const navigate=useNavigate();

    // if (!currentUser){
    //     navigate('/');
    //     return null;
    // }
    
    return (
        <div className="Greeting">
          <h2>Welcome stranger's things user!</h2>
          {/* <header>
            <h3> Profile: {currentUser.username}</h3>
          </header>
          <p>
            <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
          </p>
          > */}
        </div>
      );
    }
    
