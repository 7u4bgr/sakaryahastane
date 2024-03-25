import React from "react";
import styles from "./index.module.css";
import Terapiimages from "../../assets/images/terapi.jpeg";
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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3021.4008907484845!2d30.39032507602878!3d40.77519997138406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ2JzMwLjciTiAzMMKwMjMnMzQuNCJF!5e0!3m2!1str!2saz!4v1711367331637!5m2!1str!2saz"
                  width="600"
                  height="450"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                >
                  Yol Tarifi Al
                </iframe>
              </button>
            </div>
            <div className={styles.pcontrol2}>
              <p>
                (Semerciler Mahallesi Yörük Sokak No:10 Daire:3 Adapazarı /
                Serdivan / Sakarya ETERNAL PLAZA)
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
