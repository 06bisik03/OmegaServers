import styles from './Services.module.css';
const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>What We Offer</div>
            <div className={styles.details}>
                
                <div className={styles.perk}>
                    <div className={styles.perkImg}>
                        <img alt="x" src="/images/security.png"/>
                    </div>
                    <div className={styles.perkDesc}>Best Security</div>
                    <div className={styles.perkDetail}>We offer the best data security to our clients, which makes us stand out</div>
                </div>
                <div className={styles.perk}>
                    <div className={styles.perkImg}>
                        <img alt="x" src="/images/ease.png"/>
                    </div>
                    <div className={styles.perkDesc}>Ease of Use</div>
                    <div className={styles.perkDetail}>Our system is easy to use and integrate</div>
                </div>
                <div className={styles.perk}>
                    <div className={styles.perkImg}>
                        <img alt="x" src="/images/maintanence.png"/>
                    </div>
                    <div className={styles.perkDesc}>Maintenance</div>
                    <div className={styles.perkDetail}>Our code is written in highest standards, which makes it highly sustainable</div>
                </div>
                <div className={styles.perk}>
                    <div className={styles.perkImg}>
                        <img alt="x" src="/images/scalable.png"/>
                    </div>
                    <div className={styles.perkDesc}>Scalable
</div>
                    <div className={styles.perkDetail}>Our servers are located all over the world, therefore improving scalability and speed</div>
                </div>
                <div className={styles.perk}>
                    <div className={styles.perkImg}>
                        <img alt="x" src="/images/supp.png"/>
                    </div>
                    <div className={styles.perkDesc}>24/7 Support
</div>
                    <div className={styles.perkDetail}>Our team is available at all times in case you need us</div>
                </div>
                <div className={styles.perk}>
                    <div className={styles.perkImg}>
                        <img alt="x" src="/images/price.png"/>
                    </div>
                    <div className={styles.perkDesc}>Price</div>
                    <div className={styles.perkDetail}>We offer the highest value/cost ratio</div>
                </div>
            
            </div>
        </div>
    )
};  
export default Services;