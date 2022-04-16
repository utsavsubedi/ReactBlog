import { useState } from "react";

function CreateBlog(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [aurthor, setAurthor] = useState('');
    return (
        <div className= "create-box">
            <h1>Create blog</h1>
            <form>
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
                <input 
                    type="text"
                    onChange = {(e) => setAurthor(e.target.value)}
                />
                <button>Add Blog</button>
            </form>
            <p>{title}</p>
            <p>{aurthor}</p>
            <p>{content}</p>
        </div>
    )
};

export default CreateBlog;
