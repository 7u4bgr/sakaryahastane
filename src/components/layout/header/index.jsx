import React from "react";
import styles from "./index.module.css";
import { CalendarIcon, CallIcon, HospitalIcon, MapIcon } from "../../../icons";
import { Link } from "react-router-dom";
import Logoimages from '../../../assets/images/kalp.jpeg'
import Sakaryaimages from '../../../assets/images/sakarya.webp'
const Header = () => {
  return (
    <div className={styles.background}>
      <div className={styles.background1}>
        <div className={styles.flexs}>
         
          <div className={styles.controlsakarya}>

        
          <Link to={'/'} className={styles.texts}>
           <img src={Logoimages} alt="" />
           <div className={styles.eternal}>

           <h2>Eternal </h2>
            <h2>Sağlık Hizmetleri</h2>
          <p>(Tüm Hakları Saklıdır)</p>
           </div>
          
          </Link>
          <div className={styles.sakaryatexts}>
            <h2>SAKARYA</h2>
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
            <Link target="_blank" to={"https://www.instagram.com/sakaryaevdesaglik.esh/"}>
              <div>
                <CalendarIcon />
              </div>
              <h2>Randevu Yap</h2>
            </Link>
            <Link
            target="_blank"
              to={
                "https://www.google.com/maps/dir//Sakarya+Evde+Sa%C4%9Fl%C4%B1k+Hizmetleri+(E.S.H)/@40.7766689,30.3125322,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14ccb3319157902d:0xf9d992cc34e0f718!2m2!1d30.394933!2d40.7766982?entry=ttu"
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
