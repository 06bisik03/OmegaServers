import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.socials}>
          <div>
            <div>
                <img alt="x"src="/images/omg.png" />
            </div>
            <div>Omega</div>
          </div>
          <div>10 Downing St, London SW1A 2AB, United kingdom</div>

        </div>
        <div className={styles.links}>
          <div>Main</div>
          <div>Blog</div>
          <div>FAQs</div>
          <div>Support</div>
          <div>About Us</div>
        </div>
        <div className={styles.links}>
          <div>Product</div>

          <div>Login</div>
          <div>Personal</div>
          <div>Business</div>
          <div>Team</div>
        </div>
        <div className={styles.links}>
          <div>Press</div>
          <div>Logos</div>
          <div>Events</div>
          <div>Stories</div>
          <div>Office</div>
        </div>
        <div className={styles.links}>
          <div>Legal</div>
          <div>GDPR</div>
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
          <div>Disclaimer</div>
        </div>
        
      </div>
      <div className={styles.logo}>
      Omega © 2023
      </div>
    </div>
  );
};
export default Footer;
