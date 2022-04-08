import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('ram');
    const [age, setAge] = useState(20);
    const handleClick = () => {
        setName('shyam');
        setAge('30');
    }

    return (
        <div className="home">
            <h1>Home</h1>
            <p>{name} is {age} years old.</p>
            <div>
                <button onClick={ handleClick }>Click Me</button>
            </div>
        </div>
    );
}

export default Home;