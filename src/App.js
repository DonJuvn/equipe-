import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Intro from "./blocks/intro";
import AboutUs from "./blocks/about";
import Services from "./blocks/services";

function App() {
   return (
      <>
         <Header />
         <Intro />
         <AboutUs />
         <Services />
         <Footer />
      </>
   );
}

export default App;
