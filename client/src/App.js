import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Skill from "./pages/Skill/Skill";
import ScrollToTop from "react-scroll-to-top";
import {useTheme} from "./context/ThemeContext";
import Jello from 'react-reveal/Jello';
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme()
  return (
    <>
     <div id={theme}>
     <MobileNav />
       <Layout/>
       <div className="container ">
       <About/>
       <Education/>
       <Skill/>
       <Projects/>
       <Contact/>
       </div>
       <Jello>
       <div className="footer pb-3 ms-3">
         <h4 className="text-center">Made With Biswas &copy; 2023</h4>
       </div>
       </Jello>
     </div>
      <ScrollToTop  
      smooth
      color="white" 
      style={{backgroundColor:'#1e1e2c', borderRadius: "80px"}} />
    </>
  );
}

export default App;
