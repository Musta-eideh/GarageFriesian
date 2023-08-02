import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";

import styles from "./Navbar.module.css";
import horse from '../../img/Horse.png'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
        <div className={styles.navbar}>
          <Link to="#" className={styles.menubars}>
            <FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={`${styles.navmenu} ${sidebar ? styles.active : ""}`}>
          
          <ul className={styles.navmenuitems} onClick={showSidebar}>
            <div className={styles.navbartoggle}>
              <Link to="#" className={styles.menubars}>
                <AiOutlineClose />
              </Link>
            </div>

            <div className={styles.logomenor}>
              <img src={horse} />
            </div>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      
    </>
  );
}

export default Navbar;