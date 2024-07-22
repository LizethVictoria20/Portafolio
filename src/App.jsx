import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Main />
      <hr className="blur-sm separator" />
      <About />
    </>
  );
}

export default App;
