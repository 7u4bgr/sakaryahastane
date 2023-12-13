import React from "react";
import styles from "./index.module.css";
import Terapiimages from '../../assets/images/terapi.jpeg'
const Harita = () => {
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <div className={styles.texts}>
          <h2>Bize Ulaşın:</h2>
        </div>
        <div className={styles.maps}>
          <img src={Terapiimages} alt="" />
        </div>
        <div className={styles.controls}>
          <div className={styles.text1}>
            <div className={styles.textcontrol}>
              <h2>İletişim</h2>
            </div>
            <div className={styles.buttoncontrol}>
              <button>
                <a href="tel:05434063544">Hemen Ara</a>
              </button>
            </div>
            <div className={styles.pcontrol}>
              <p>0543 406 35 44</p>
              <p>0552 518 96 54</p>
            </div>
          </div>
          <div className={styles.text2}>
            <div className={styles.textcontrol2}>
              <h2>Adres</h2>
            </div>
            <div className={styles.buttoncontrol2}>
              <button>
                <a target="_blank" href="https://www.google.com/maps/dir//Sakarya+Evde+Sa%C4%9Fl%C4%B1k+Hizmetleri+%28E.S.H%29/data=!4m8!4m7!1m0!1m5!1m1!1s0x14ccb3319157902d:0xf9d992cc34e0f718!2m2!1d30.394932999999998!2d40.7766982">
                  Yol Tarifi Al
                </a>
              </button>
            </div>
            <div className={styles.pcontrol2}>
              <p>
              Serdivan Muhsin Yazıcıoğlu bulvarı Adatepe plaza No 54/1
              </p>
            </div>
          </div>
          <div className={styles.text3}>
            <div className={styles.textcontrol3}>
              <h2>Çalışma Saatleri</h2>
            </div>
            <div className={styles.pcontrol3}>
            <div className={styles.pdate}>
            <p>Pzt:</p>
            <p>Sal:</p>
            <p>Çar:</p>
            <p>Per:</p>
            <p>Cum:</p>
            <p>Cmt:</p>
            <p>Paz:</p>
            </div>
            <div className={styles.puhr}>
              <p>24 saat açık</p>
              <p>24 saat açık</p>
              <p>24 saat açık</p>
              <p>24 saat açık</p>
              <p>24 saat açık</p>
              <p>24 saat açık</p>
              <p>24 saat açık</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Harita;
