import styles from "./Pricing.module.css";
const Pricing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>Pick Your Best Option</div>
        <div>Create, maintain and store your data with Omega.</div>
      </div>
      <div className={styles.details}>
        <div className={styles.plan}>
          <div>Basic</div>
          <div>$7.99 user/month after offer period</div>
          <div className={styles.perks}>
            <div>
              <img alt="x" src="/images/box.png" />
              Secure accounts
            </div>
            <div>
              <img alt="x" src="/images/box.png" />
              Best for small business
            </div>
            <div>
              <img alt="x" src="/images/box.png" />
              Easy
            </div>
            <div>
              {" "}
              <img alt="x" src="/images/box.png" />
              Affordable
            </div>
            <div>
              {" "}
              <img alt="x" src="/images/box.png" />
              1GB RAM
            </div>
          </div>
          <div className={styles.btnCont}>
            <button>Get Started</button>
          </div>
        </div>
        <div className={styles.plan}>
          <div>Standard</div>
          <div>$18.99 user/month after offer period</div>
          <div className={styles.perks}>
            <div>
              <img alt="x" src="/images/box.png" />
              Secure accounts
            </div>
            <div>
              <img alt="x" src="/images/box.png" />
              Best for small business
            </div>
            <div>
              <img alt="x" src="/images/box.png" />
              Customizable
            </div>
            <div>
              {" "}
              <img alt="x" src="/images/box.png" />
              1TB SSD
            </div>
            <div>
              {" "}
              <img alt="x" src="/images/box.png" />
              3GB RAM
            </div>
          </div>
          <div className={styles.btnCont}>
            <button>Get Started</button>
          </div>
        </div>
        <div className={styles.plan}>
          <div>Premium</div>
          <div>$39.99 user/month after offer period</div>
          <div className={styles.perks}>
            <div>
              <img alt="x" src="/images/box.png" />
              Secure accounts
            </div>
            <div>
              <img alt="x" src="/images/box.png" />
              Best for small business
            </div>
            <div>
              <img alt="x" src="/images/box.png" />
              Customizable
            </div>
            <div>
              {" "}
              <img alt="x" src="/images/box.png" />
              Easy Integration
            </div>
            <div>
              {" "}
              <img alt="x" src="/images/box.png" />
              Development Team
            </div>
            <div>
              {" "}
              <img alt="x" src="/images/box.png" />
              DNS & Domain included
            </div>
          </div>
          <div className={styles.btnCont}>
            <button>Get Started</button>
          </div>
        </div>
        <div className={styles.plan}>
          <div>Enterprise</div>
          <div>+$399.99 enterprise/month after offer period</div>
          <div className={styles.perks}>
            <div>
              <img alt="x" src="/images/box.png" />
              Unlimited Storage
            </div>
            <div>
              <img alt="x" src="/images/box.png" />
              Scalability
            </div>
            <div>
              <img alt="x" src="/images/box.png" />
              Free DNS & Domain
            </div>
           
          </div>
          <div className={styles.btnCont}>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
