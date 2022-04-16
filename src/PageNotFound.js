import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return(
        <div className='not-found'>
            <h2>Sorry, The page you are looking for couldnot be found.</h2>
            <Link to='/'>Back to Home page</Link>
        </div>
    );
}

export default PageNotFound;