import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import LandingPage from './components/landing-page/LandingPage';
// import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SignIn from "./pages/sign-in/SignIn";
import Profile from "./pages/profile/Profile";
import SignUp from "./pages/signup/SignUp";
// import PostView from './components/post-view/PostView';

function App() {
  return (
    <BrowserRouter>
        
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/insta/posts" element={<PostView />} /> */}
        {/* <Route path="/instagram" element={<Navbar />} /> */}
        <Route path="/instagram" element={<Home />} />
        <Route path="/instagram/signin" element={<SignIn />} />
        <Route path="/instagram/signup" element={<SignUp />} />
        <Route path="/instagram/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
