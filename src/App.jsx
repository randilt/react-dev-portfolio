import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="pfp">
          <img
            src="https://pics.craiyon.com/2023-10-30/66ff0c95358e458c859ecea5d3764b32.webp"
            alt=""
          />
        </div>

        <div className="button-effect">
          <button className="glowing-btn">
            <span className="glowing-txt">
              <span className="faulty-letter">IAM</span>
            </span>
          </button>
          <br />
          <button className="glowing-btn">
            <span className="glowing-txt">
              <span className="faulty-letter">R</span>ANDIL
              <span className="faulty-letter">T</span>HARUSHA
            </span>
          </button>
          <div className="hero-text">
            <h1>An Aspiring Fullstack Developer</h1>
            <p>
              Passionate full-stack developer dedicated to crafting clean and
              efficient code. Transforming ideas into powerful, user-friendly
              applications with creativity and precision.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
