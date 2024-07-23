import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Main />
      <hr className="blur-sm separator mt-20" />
      <About />
      <hr className="blur-sm separator mt-20" />
      <Projects />
      
    </>
  );
}

export default App;
