import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import { SidebarData } from "./SidebarData";

import styles from "./Navbar.module.css";
import horse from "../../img/Horse.png";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const renderSidebarItems = () => {
    return SidebarData.map((item, index) => {
      const hasChildren = item.children && item.children.length > 0;
      const hasChildrenClass = hasChildren ? "haschildren" : "";

      return (
        <li key={index} className={`${item.cName} ${hasChildrenClass}`}>
          <Link to={item.path}>
            {item.icon}
            <span>{item.title}</span>
            {hasChildren && (
              <i className={styles.outlineright}>
                <AiOutlineRight />
              </i>
            )}
          </Link>

          {hasChildren && (
            <ul className={`${styles.childrenlist}`}>
              {item.children.map((childItem, childIndex) => (
                <li key={childIndex} className={childItem.cName}>
                  <Link to={childItem.path}>{childItem.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    });
  };

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
            <img src={horse} alt="Logo" /> {/* Adicione um atributo alt para a imagem */}
          </div>

          {renderSidebarItems()}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
