import { useState } from 'react';

const Home = () => {
   const [blogs, setBlogs] = useState([
       {"title":"First Blog", "aurthor":"utsav", "content":"lorem ipsum...", "id":1},
       {"title":"Second Blog", "aurthor":"not utsav", "content":"lorem ipsum...", "id":2},
       {"title":"Third Blog", "aurthor":"maybe utsav", "content":"lorem ipsum...", "id":3},
       {"title":"Forth Blog", "aurthor":"definitely utsav", "content":"lorem ipsum...", "id":4},
   ])
    return (
        <div className="home">
                {blogs.map((blog) =>(
                    <div className="blog-preview" key={blog.id}>
                        <h2 className="title">{blog.title}</h2>
                        <div className='aurthor'>Written By: {blog.aurthor}</div>
                    </div>
                ))}
        </div>
    );
}

export default Home;