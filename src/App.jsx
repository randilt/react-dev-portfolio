import "./App.css";
import Hero from "./components/Hero";
import information from "./content/information";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        img={information.userData.img}
        description={information.userData.description}
        title={information.userData.title}
      />
      <Footer />
    </>
  );
}

export default App;
