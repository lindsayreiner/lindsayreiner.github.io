import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
// import Welcome from './components/Welcome';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './styles/App.css'

function App() {
  return (
    <>
      <Router><Navbar />
        <main style={{
          height: "100vh"
        }}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/" element={<About />} />
          </Routes>
        </main>
      </Router>

      <Footer />
    </>
  );
}

export default App;
