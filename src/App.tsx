import Header from "./components/layout/Navbar.jsx";
import Methords from "./components/Home/Methords.jsx";
import Hero from "./components/Home/Hero.jsx";
import Packeges from "./components/Home/Packeges.jsx";
import AboutUs from "./components/Home/AboutUs.jsx";
import Footer from "./components/layout/Footer.jsx";
function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <AboutUs/>
      <Methords/>
      <Packeges/>
      <Footer/>
    </div>
  );
    
}
export default App;
