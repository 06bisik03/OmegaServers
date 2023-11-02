
import Footer from "./Footer";
import Home from "./Home";
import styles from "./Intro.module.css";
import Pricing from "./Pricing";
import Services from "./Services";
import { useRef } from "react";
import Aboutus from "./Aboutus";
const Intro = () => {
    const homeRef = useRef(null);
    const serviceRef = useRef(null);
    const pricingRef = useRef(null);
    const aboutRef = useRef(null);
  const setReffer = (ref) => {
    switch(ref) {
        case "home":
            homeRef.current.scrollIntoView({behavior: "smooth"});
            break;
        case "services":
            serviceRef.current.scrollIntoView({behavior: "smooth"});
            break;
        case "pricing":
            pricingRef.current.scrollIntoView({behavior: "smooth"});
            break;
        case "contact":
            aboutRef.current.scrollIntoView({behavior: "smooth"});
            break;
        default:
            break;
    }
   
  }
    
  return (
    <div className={styles.container}>
      <div ref={homeRef}> 
        <Home setReffer={setReffer}/>
      </div>
      <div ref={serviceRef}>
        <Services />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
     
      <div className={styles.about} ref={aboutRef}>
        <Aboutus/>
      </div>
      
      <div className={styles.foot}>
        <Footer />
      </div>

    </div>
  );
};
export default Intro;
