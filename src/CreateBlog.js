import { useState } from "react";
import { useHistory } from 'react-router-dom';

function CreateBlog(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [aurthor, setAurthor] = useState('utsav');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, aurthor, content}
        setIsPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added');
            setIsPending(false);
            history.push('/');
        })

    }
    return (
        <div className= "create-box">
            <h1>Create blog</h1>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title: </label>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange= {(e) => setTitle(e.target.value)}
                />
                <label>Blog Content: </label>
                <textarea
                required 
                value ={content}
                onChange = {(e) => setContent(e.target.value)}
                >    
                </textarea>
                <label>Blog Aurthor: </label>
                <select
                    value={aurthor}
                    onChange = {(e) => setAurthor(e.target.value)}
                >
                    <option value="utsav">utsav</option>
                    <option value="maybe utsav">maybe utsav</option>
                    <option value="not utsav">not utsav</option>
                    <option value="definitely utsav">definitely utsav</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog</button>}
            </form>
            <p>{title}</p>
            <p>{aurthor}</p>
            <p>{content}</p>
        </div>
    )
};

export default CreateBlog;
