import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
   const [blogs, setBlogs] = useState(null);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
       setTimeout(
           () => {
            fetch('http://localhost:8000/blogss')
            .then(res => {
                res.json();
                if(!res.ok){
                    throw Error("couldnot fetch data from the server.");
                }
            })
            .then( data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
                setIsPending(false);
            })
            ;
            
           }
       ,1000)
   }, [] );
    return (
        <div className="home">
            { error &&  <h2> {error} </h2> }
            { isPending && <h2>Loading.......</h2> }
            {blogs && <BlogList blogs={blogs} title='All Blogs' />} 
        </div>
    );
}

export default Home;