import styles from "./Footer.module.css";

import { AiOutlineMail } from 'react-icons/ai';
import { PiTiktokLogoBold } from 'react-icons/pi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.footerContent}>
          <ul>
            <li><CiTwitter /></li>
            <li><AiOutlineInstagram /></li>
            <li><PiTiktokLogoBold /></li>
          </ul>
        </div>

        <div className={styles.email}>
            <AiOutlineMail/><p>garagefrieisan@hotmail.com</p>
        </div>
      </div>

      <div className={styles.subfooter}>
        <div>
            <p>Garage Friesian &copy; 2023</p>
        </div>
        <div>
            <p>Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
