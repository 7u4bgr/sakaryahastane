import React from "react";
import styles from "./index.module.css";
import Image from "../../../assets/images/photo1.png";
import Image1 from "../../../assets/images/photo2.png";
const Background = () => {
  return (
    <div className={styles.background}>
      <div className={styles.background1}>
        <div className={styles.flexs}>
          <div className={styles.texts}>
            <div>
              <h2>SAĞLIK MERKEZİ EVDE BAKIM HİZMETLERİ</h2>
            </div>
            <div className={styles.ptexts}>
              <p>▪ Atom Serum Tedavisi</p>
              <p>▪ Kokteyl Serum Tedavisi</p>
              <p>▪ C Vitamini Destek Tedavisi</p>
              <p>▪ Glutatyon & Pascorbin Seansları</p>
              <p>▪ Ozon Terapi </p>
              <p>▪ Evde Sağlık Hizmetleri</p>
              <p>▪ Evde Hemşirelik Hizmeti</p>
              <p>▪ Enjeksiyon (iğne)</p>
              <p>▪ Serum Takma</p>
              <p>▪ Sonda Takma Çıkarma (Değişim)</p>
              
            </div>
          </div>
          <div className={styles.images}>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.background2}>
        <div className={styles.flexs1}>
        <div className={styles.texts1}>
          <div>
            <h2>DİĞER HİZMETLERİMİZ</h2>
          </div>
          <div className={styles.ptexts1}>

         
        <p>▪ Pansuman</p>
              <p>▪ Yatak yarası bakım pansuman</p>
              <p>▪ Kan Tahlilleri</p>
              <p>▪ Hamilelik Testi (kan, idrar, kit)</p>
              <p>▪ Sağlık Danışmanlık Hizmeti</p>
              <p>▪ Yaşlık Bakım Ve Destek Hizmeti</p>
              <p>▪ 7/24 Hemşirelik Hizmeti</p>
              <p>▪ Corona Virüs (Covid19) PCR Testi</p>
              </div>
        </div>
        <div className={styles.images1}>
            <img src={Image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
