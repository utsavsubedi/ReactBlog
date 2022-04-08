import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
   const [blogs, setBlogs] = useState([
       {"title":"First Blog", "aurthor":"utsav", "content":"lorem ipsum...", "id":1},
       {"title":"Second Blog", "aurthor":"not utsav", "content":"lorem ipsum...", "id":2},
       {"title":"Third Blog", "aurthor":"maybe utsav", "content":"lorem ipsum...", "id":3},
       {"title":"Forth Blog", "aurthor":"definitely utsav", "content":"lorem ipsum...", "id":4},
   ])
    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs' /> 
        </div>
    );
}

export default Home;