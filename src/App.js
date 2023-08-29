import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;