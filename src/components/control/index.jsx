import React from "react";
import styles from "./index.module.css";
import Image1 from "../../assets/images/photo6.png";
import Image2 from "../../assets/images/photo5.png";
const Control = () => {
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <div className={styles.flexcontrol1}>
          <div className={styles.control1}>
            <div className={styles.text1}>
              <h2>Hakkımızda</h2>
            </div>
            <div className={styles.text2}>
              <p>
                Sağlık hizmetleri, bireylerin sağlığını korumak, hastalıkları
                tedavi etmek ve genel refahlarını artırmak amacıyla sunulan
                çeşitli hizmetlerin bütünüdür.Bu hizmetler, sağlık
                profesyonelleri tarafından sunulur ve genellikle multidisipliner
                bir yaklaşımla bir araya getirilir. Sağlık hizmetlerinin amacı,
                bireylerin sağlığını korumak, hastalıkları tedavi etmek ve
                yaşamlarını daha sağlıklı bir şekilde sürdürmelerine yardımcı
                olmaktır.
              </p>
            </div>
          </div>
          <div className={styles.control2}>
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className={styles.flexcontrol2}>
          <div className={styles.control3}>
            <div className={styles.text3}>
              <h2>Detaylı Bilgi</h2>
            </div>
            <div className={styles.text4}>
              <p>
                Sağlığı genel olarak toplumda iyileştirmek amacıyla yapılan
                çalışmaları içerir. Bu çalışmalar, eğitim kampanyaları,
                salgınların önlenmesi, toplumun genel sağlık durumunu
                iyileştirmeye yönelik programlar gibi çeşitli şekillerde
                gerçekleşebilir.
              </p>
            </div>
          </div>
          <div className={styles.control4}>
            <img src={Image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
