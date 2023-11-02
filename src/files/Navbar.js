import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
const Navbar = ({reffer}) => {
  const [active, setActive] = useState("home");
  useEffect(() => {
    reffer(active);
  },[active,reffer]);
  return (
    <div className={styles.container}>
      <div className={styles.title}><img src="/images/omg.png"/>Omega</div>
      <div className={styles.elements}>
        <div
          style={{ color: active === "home" ? "blue" : "black" }}
          onClick={() => setActive("home")}>
          Home
        </div>
        <div
          style={{ color: active === "services" ? "blue" : "black" }}
          onClick={() => setActive("services")}>
          Services
        </div>
        <div
          style={{ color: active === "pricing" ? "blue" : "black" }}
          onClick={() => setActive("pricing")}>
          Pricing
        </div>
        <div
          style={{ color: active === "contact" ? "blue" : "black" }}
          onClick={() => setActive("contact")}>
          About Us
        </div>
      </div>
    </div>
  );
};
export default Navbar;
