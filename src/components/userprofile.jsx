import React from 'react';
import {useSelector} from 'react-redux';
import {currentUser} from '../redux/authenticate';

export default function UserProfile(){
const loggedInUser=useSelector(currentUser)

console.log (loggedInUser)
    
    return(

        <div>
            <h1>Welcome {loggedInUser}!</h1>
        </div>
    )
}