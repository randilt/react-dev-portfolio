import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="button-effect">
        <button className="glowing-btn">
          <span className="glowing-txt">
            <span className="faulty-letter">Iam</span>
          </span>
        </button>
        <br />
        <button className="glowing-btn">
          <span className="glowing-txt">
            <span className="faulty-letter">R</span>ANDIL
            <span className="faulty-letter">T</span>HARUSHA
          </span>
        </button>
        <div className="hero-text">An Aspiring Fullstack Developer</div>
      </div>
    </>
  );
}

export default App;
