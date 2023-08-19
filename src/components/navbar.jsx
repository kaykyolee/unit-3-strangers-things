import {Routes, Route, Link} from "react-router-dom";

export default function Navbar () {
    return (
        <div>
            <Link to="/home">HOME</Link>
            <Link to="/posts">POSTS</Link>
            <Link to="/logout">LOG OUT</Link>
        </div>
    )
}