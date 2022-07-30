import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Dropdown from './components/Dropdown';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Neetcode from './components/Neetcode';
import Blind from './components/Blind';
import Leetcode from './components/Leetcode';
import Striver from './components/Striver';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>  
        <Route exact path="/about" element={<About/>}/>  
        <Route exact path="/neetcode" element={<Neetcode/>}/>
        <Route exact path="/blind" element={<Blind/>}/>
        <Route exact path="/striver" element={<Striver/>}/>
        <Route exact path="/leetcode" element={<Leetcode/>}/>
      </Routes>

      
    {/* <div className="dropdown center">
      <Dropdown/>
    </div> */}
    {/* <Footer/> */}
    </Router>
    </div>
  );
}

export default App;
