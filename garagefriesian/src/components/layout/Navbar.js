import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";

import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/GHorseF.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <Container> */}
        <div className={styles.navbar}>
          <Link to="#" className={styles.menubars}>
            <FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={`${styles.navmenu} ${sidebar ? styles.active : ""}`}>
          <ul className={styles.navmenuitems} onClick={showSidebar}>
            <li className={styles.navbartoggle}>
              <Link to="#" className={styles.menubars}>
                <AiOutlineClose />
              </Link>
            </li>
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
      {/* </Container> */}
    </>
  );
}

export default Navbar;