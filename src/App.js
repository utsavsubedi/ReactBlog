import NavBar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './CreateBlog';
import BlogDetails from './BlogDetails';
import PageNotFound from './PageNotFound';

function App() {
  
  return (
    
    <div className="App">
      <NavBar />
      <Router>
        <div className="content">
          <Switch>
            <Route exact path ='/'>
              <Home />
            </Route>
            <Route exact path ='/create'>
              <CreateBlog />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default  App;
