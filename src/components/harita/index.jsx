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
                <a target="_blank" href="https://www.google.com/maps/place/Bah%C3%A7elievler,+Muhsin+Yaz%C4%B1c%C4%B1o%C4%9Flu+Blv.+No:54+D:1,+54050+Serdivan%2FSakarya,+T%C3%BCrkiye/@40.7603312,30.362931,17z/data=!3m1!4b1!4m5!3m4!1s0x14ccb28d588a2687:0x2495af4d4bf56709!8m2!3d40.7603272!4d30.3655059?entry=ttu">
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
