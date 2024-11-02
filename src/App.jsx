import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Players from "./pages/Players";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/players" element={<Players />}/>
        
       
      </Routes>
    </Router>
  );
}

export default App;
