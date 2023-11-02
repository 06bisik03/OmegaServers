import styles from "./Aboutus.module.css";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Aboutus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Find more about us</div>
      <div className={styles.details}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className={styles.mySwiper}>
          <div
            slot="container-start"
            className={styles.parallaxBG}
            style={{
              backgroundImage:
                "url(/images/serv.jpeg)",
                backgroundPosition: "center",
                

               
            }}
            data-swiper-parallax="-23%"></div>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.titleSwiper} data-swiper-parallax="-300">
              Our Unwavering Commitment to Excellence
            </div>
            <div className={styles.subtitle} data-swiper-parallax="-200">
              Reliability, Security, Performance
            </div>
            <div className={styles.text} data-swiper-parallax="-100">
              <p>
                At Omega, our unwavering commitment to excellence drives
                everything we do. We're dedicated to delivering the highest
                standard of server solutions, providing you with unmatched
                reliability, security, and performance. Our team of experts
                works tirelessly to ensure that your online presence remains
                seamless and hassle-free. With years of experience and a passion
                for technology, we are ready to meet and exceed your server
                hosting needs.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.titleSwiper} data-swiper-parallax="-300">
              The Team Behind the Servers
            </div>
            <div className={styles.subtitle} data-swiper-parallax="-200">
              Meet Our Experts
            </div>
            <div className={styles.text} data-swiper-parallax="-100">
              <p>
                Meet the exceptional individuals who power the engine of Omega.
                Our team is comprised of skilled professionals who are the
                backbone of our server services. With a diverse range of
                expertise in server management, security, and optimization, we
                are committed to taking your server infrastructure to the next
                level. Get to know us and trust that your server services are in
                capable hands.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.titleSwiper} data-swiper-parallax="-300">
              Our Mission for Your Success
            </div>
            <div className={styles.subtitle} data-swiper-parallax="-200">
              Empowering Your Digital Journey
            </div>
            <div className={styles.text} data-swiper-parallax="-100">
              <p>
                At Omega, our mission is simple yet profound: to
                empower businesses and individuals with cutting-edge server
                technology. We believe that your online success is our success.
                We're here to support your growth, goals, and ambitions by
                providing tailored server solutions that go above and beyond the
                ordinary. Our mission is your mission, and we're excited to be a
                part of your digital journey.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Aboutus;
