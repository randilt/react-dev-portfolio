import "./App.css";
import Hero from "./components/Hero";
import userData from "./content/information";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        img={userData.img}
        description={userData.description}
        title={userData.title}
      />
    </>
  );
}

export default App;
