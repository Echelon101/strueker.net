import React from "react"


import { Link } from "gatsby"

import styles from "./navbar.module.scss"

function spacerStyle(noSpacer) {
  if(noSpacer) {
    return {height: 0};
  }
  return {};
}

const Navbar = ({ noSpacer = false }) => {
  return (
      <div className={styles.navBarPlaceholder} style={spacerStyle(noSpacer)}>
          <div className={styles.navBar}>
            <nav>
              <Link to={"/"} className={styles.logo}>Strueker.net</Link>
            </nav>
          </div>
      </div>
  )
}

export default Navbar
