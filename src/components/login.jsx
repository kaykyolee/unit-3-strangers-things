import {Link} from 'react-router-dom'

export default function Home (){
    return (
    <div>

        
        <div className='loginButton'>
        <h2>Are you an existing user? </h2>
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