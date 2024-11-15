import React from "react"
import styles from './header.module.css'
const Header = () => {
  return (
    <div>
      <header>
        <h1 className={styles["title"]}>TODO List Demo App</h1>
        <p className={styles["sub-title"]}>Do it now</p>
      </header>
    </div>
  )
};

export default Header;
