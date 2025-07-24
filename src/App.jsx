import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./page/Home";
import Project from "./page/Project";
import Blog from "./page/Blog";
import Navbar from "./componet/Navbar";
import Footer from "./componet/Footer";
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <Chatbot /> */}
      <Footer />
    </Router>

  );
}

export default App;

