import React from "react";
import styles from "./index.module.css";
const Harita = () => {
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <div className={styles.texts}>
          <h2>Bize Ulaşın:</h2>
        </div>
        <div className={styles.maps}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.33256918443!2d30.392358076441347!3d40.77670223365137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb3319157902d%3A0xf9d992cc34e0f718!2sSakarya%20Evde%20Sa%C4%9Fl%C4%B1k%20Hizmetleri%20(E.S.H)!5e0!3m2!1str!2saz!4v1702411660360!5m2!1str!2saz"></iframe>
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
                Semerciler Mahallesi Lüleci Sokak Bem Bir Sen Karşısı Platin
                Bilardo çaprazı Klas Kahve bitişiği Karşı Sokak ESKİ VATAN
                HASTANESİ No:9 54100 Adapazarı/Sakarya Türkiye
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
