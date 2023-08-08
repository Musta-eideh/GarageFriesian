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
            <li><a href="https://twitter.com/garagefriesian"><CiTwitter /></a></li>
            <li><a href="https://www.instagram.com/garagefriesian/"><AiOutlineInstagram /></a></li>
            <li><a href="https://www.tiktok.com/@garage_friesian"><PiTiktokLogoBold /></a></li>
          </ul>
        </div>

        <div className={styles.division}></div>

        <div className={styles.email}>
            <a href="garagefriesian@hotmail.co">
            <AiOutlineMail/><p>garagefrieisan@hotmail.com</p>
            </a>
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
