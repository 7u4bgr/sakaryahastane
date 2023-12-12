import React from "react";
import styles from "./index.module.css";
import { RaitingIcon } from "../../icons";

const Comments = () => {
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <div className={styles.raiting}>
          <div className={styles.icons}>
            <RaitingIcon />
            <RaitingIcon />
            <RaitingIcon />
            <RaitingIcon />
            <RaitingIcon />
          </div>
          <div className={styles.comments}>
            <h2>Yorumlarınız:</h2>
          </div>
        </div>
        <div className={styles.peoples}>
          <div className={styles.people1}>
            <div className={styles.name}>
              <div className={styles.icons1}>
                <RaitingIcon />
                <RaitingIcon />
                <RaitingIcon />
                <RaitingIcon />
                <RaitingIcon />
              </div>
              <div className={styles.peoplename}>
                <h2>Necmi Argun</h2>
              </div>
            </div>
            <div className={styles.commentpeople}>
              <p>
                Ateşim çok yüksekti.İlaçları içmeme rağmen ateşim bir türlü
                düşmedi. Eternali aradım 20 dakika içinde geldiler bir tane aürı
                kesici ateş düşürücü ufak serum taktılar hemen ateşim düşmeye
                başladı Uzman doktorlarının önerdiği atom serumla serum bitmeden
                kendime geldim. Allah razı olsun hiç canımı yakmadılar
                Kesinlikle öneriririm elleri çok hafif üstelik iyi olmam için
                ellerinden geleni yaptılar. fiyatları çok uygun .Eternal Sağlık
                ekibine canı gönülden teşekkür ederim.
              </p>
            </div>
          </div>
          <div className={styles.people2}>
            <div className={styles.name2}>
              <div className={styles.icons2}>
                <RaitingIcon />
                <RaitingIcon />
                <RaitingIcon />
                <RaitingIcon />
                <RaitingIcon />
              </div>
              <div className={styles.peoplename2}>
                <h2>Mehmet Serhat</h2>
              </div>
            </div>
            <div className={styles.commentpeople2}>
              <p>
                Bugün annem ve babam için ilk glutatyon seanslarını yaptırdık.
                Hastalarına karşı ilgi, alaka ve tutumları harikulade.
                İçtenlikle, hiç düşünmeden hizmet alabileceğiniz bir kurum. Her
                anlamda destek sağlayarak her şeyi sizin için biraz daha kolay
                hale getirmeleri ise büyük bir artı.
              </p>
            </div>
          </div>
          <div className={styles.people3}>
            <div className={styles.name3}>
              <div className={styles.icons3}>
                <RaitingIcon />
                <RaitingIcon />
                <RaitingIcon />
                <RaitingIcon />
                <RaitingIcon />
              </div>
              <div className={styles.peoplename3}>
                <h2>Bahadır Karaçalı</h2>
              </div>
            </div>
            <div className={styles.commentpeople3}>
              <p>
                Kurum gerçekten çok ilgili , işini çok iyi ve dürüst bir şekilde
                yapmaktadır. Kadrosunun tecrübesi çok çok yüksek . Gönül
                rahatlığı ile tavsiye ederim … Aldığım iyi hizmet için buradan
                tekrardan teşekkürlerimi sunarım✋👏
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
