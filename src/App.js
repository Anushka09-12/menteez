//import logo from './logo.svg';
//import './App.css';
import Signup from './Components/Signup';
import Signupd from "./Components/Signupd"
import Signind from "./Components/Signind"
import Home from './Components/Home.jsx';
import Signin from "./Components/Signin"
import Main from "./Components/Main"
import Notes from "./Components/NoteComponents/MainNotes"
import AForm from "./Formanxiety";
import DForm from "./Formdepression";
import SForm from "./Formstress";
import Guide from "./Components/Guide";
import Blog1 from "./Components/Blog1";
import Blog2 from "./Components/Blog2";
import Blog3 from "./Components/Blog3";
import Blog4 from "./Components/Blog4";
import Doctor1 from "./Components/Doctor1";
import Doctor2 from "./Components/Doctor2";
import Doctor3 from "./Components/Doctor3";
import Profile from "./Components/Profile";
import Assessment from './Components/Assessment';
import Activities from './Components/ReactVideoGallarey';
import Game1 from "./Components/ColourGame.jsx"
import Password from "./Components/Password"
import "./Components/Home.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <div className='App'>
      
      <Router>
        <Routes>
          <Route path="/" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/main" element={<Main/>}></Route>
          <Route path="/diary" element={<Notes/>}></Route>
          <Route path="/aform" element={<AForm/>}></Route>
          <Route path="/dform" element={<DForm/>}></Route>
          <Route path="/sform" element={<SForm/>}></Route>
          <Route path ="/signupd" element={<Signupd/>}></Route>
          <Route path ="/signind" element={<Signind/>}></Route>
          <Route path="/guide" element={<Guide/>}></Route>
          <Route path="/blog1" element={<Blog1/>}></Route>
          <Route path="/blog2" element={<Blog2/>}></Route>
          <Route path="/blog3" element={<Blog3/>}></Route>
          <Route path="/blog4" element={<Blog4/>}></Route>
          <Route path="/assessment" element={<Assessment/>}></Route>
          <Route path="/doctor1" element={<Doctor1/>}></Route>
          <Route path="/doctor2" element={<Doctor2/>}></Route>
          <Route path="/doctor3" element={<Doctor3/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/activities" element={<Activities/>}></Route>
          <Route path="/game1" element={<Game1/>}></Route>
          <Route path="/password" element={<Password/>}></Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;

