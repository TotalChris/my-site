import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Construction from "./pages/Construction";
import LogIn from "./pages/LogIn";
import LogOut from "./pages/LogOut";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import PostForm from "./pages/PostForm";
import PrivateRoute from "./components/PrivateRoute";
import Post from "./pages/Post";
import Redirect from "./components/Redirect";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";

function App() {

  return (
    <div className='app bg-base-200 dark:bg-black dark:text-primary-content min-h-screen'>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/title/index.html" element={<Redirect to='https://titlenotes.netlify.app/' />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/contact/thank-you' element={<ThankYou />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/under-construction' element={<Construction />} />
                <Route path='/log-in' element={<LogIn />} />
                <Route path='/not-found' element={<NotFound />} />
                <Route path="/log-out" element={<PrivateRoute />}>
                    <Route path='/log-out' element={<LogOut />} />
                </Route>
                <Route path="/new-post" element={<PrivateRoute />}>
                    <Route path='/new-post' element={<PostForm />} />
                </Route>
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:postId" element={<Post />} />
                <Route path="/profile/:userId" element={<Profile />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    </div>


);
}

export default App;
