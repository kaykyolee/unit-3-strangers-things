import {Routes,Route} from 'react-router-dom';
import AllPosts from "./allposts";
import SinglePost from "./singlepost";
import NewPostForm from "./newpostform";

export default function Posts(){
    return(
        <div>
            <Routes>
                <Route path="/posts" element={<AllPosts/>}/>
                <Route path="/posts/:id" element={<SinglePost/>}/>
                <Route path="/posts/newpostform" element={<NewPostForm/>}/>
            </Routes>
        </div>
    );
}



