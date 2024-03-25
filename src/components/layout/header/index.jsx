import React from "react";
import styles from "./index.module.css";
import { CalendarIcon, CallIcon, HospitalIcon, MapIcon } from "../../../icons";
import { Link } from "react-router-dom";
import Logoimages from "../../../assets/images/kalp.jpeg";
import Sakaryaimages from "../../../assets/images/sakarya.webp";
const Header = () => {
  return (
    <div className={styles.background}>
      <div className={styles.background1}>
        <div className={styles.flexs}>
          <div className={styles.controlsakarya}>
            <Link to={"/"} className={styles.texts}>
              <img src={Logoimages} alt="" />
              <div className={styles.eternal}>
                <h2>Eternal </h2>
                <h2>Sağlık Hizmetleri</h2>
                <p>(Tüm Hakları Saklıdır)</p>
              </div>
            </Link>
            <div className={styles.sakaryatexts}>
              <h2>SAKARYA</h2>
              <p>Düzce,Kocaeli,İstanbul</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background2}>
        <div className={styles.flexs1}>
          <div className={styles.texts1}>
            <a target="_blank" href="tel:05434063544">
              <div>
                <CallIcon />
              </div>
              <h2>Hemen Ara</h2>
            </a>
            <Link
              target="_blank"
              to={"https://www.instagram.com/sakaryaevdesaglik.esh/"}
            >
              <div>
                <CalendarIcon />
              </div>
              <h2>Randevu Yap</h2>
            </Link>
            <Link
              target="_blank"
              to={
                "https://www.google.com/maps/place/40%C2%B046'30.7%22N+30%C2%B023'34.4%22E/@40.7752,30.3903251,17z/data=!3m1!4b1!4m4!3m3!8m2!3d40.7752!4d30.3929?entry=ttu"
              }
            >
              <div>
                <MapIcon />
              </div>
              <h2>Yol Tarifi</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
