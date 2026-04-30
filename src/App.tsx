import Review from "./components/Home/Review.jsx";
import Footer from "./components/layout/Footer.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/Home/Hero.jsx";
import AboutUs from "./components/Home/AboutUs.jsx";
import Methords from "./components/Home/Methords.jsx";
import Packeges from "./components/Home/Packeges.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs/>
      <Methords/>
      <Packeges/>
      <Review />
      <Footer /> 
    </div>
  );
    
}
export default App;
