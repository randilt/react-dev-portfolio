import "./App.css";
import Hero from "./components/Hero";
import information from "./content/information";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        img={information.userData.img}
        description={information.userData.description}
        title={information.userData.title}
      />
    </>
  );
}

export default App;
