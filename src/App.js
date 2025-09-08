import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Intro from "./blocks/intro";
import AboutUs from "./blocks/about";
import Services from "./blocks/services";
import Cases from "./blocks/cases";
import Process from "./blocks/process";
import Feedbacks from "./blocks/feedbacks";

function App() {
   return (
      <>
         <Header />
         <Intro />
         <AboutUs />
         <Services />
         <Cases />
         <Process />
         <Feedbacks />
         <Footer />
      </>
   );
}

export default App;
