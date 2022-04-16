import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails =  () => {
    const { id } = useParams();
    const history = useHistory();
    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs/'+id);
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    } 
    return (
        <div className='blog-details'>
            { isPending && <h2>Loading....</h2> }
            { error && <h2>{error}</h2> }
            { blogs && 
            <article>
                <h2>{blogs.title}</h2>
                <p>Written By: {blogs.aurthor}</p>
                <br />
                <div>
                    {blogs.content}
                </div>
                <button onClick = {handleDelete}>Delete Blog</button>
            </article>
            }
        </div>
    )
};

export default BlogDetails;