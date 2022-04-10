import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
   const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            { error &&  <h2> {error} </h2> }
            { isPending && <h2>Loading.......</h2> }
            {blogs && <BlogList blogs={blogs} title='All Blogs' />} 
        </div>
    );
}

export default Home;