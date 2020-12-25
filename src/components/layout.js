import React from "react"
import PropTypes from "prop-types"

import styles from "./layout.module.scss"
import Navbar from "./navbar"

const Layout = ({ children, noNavSpacer = false }) => {
  return (
      <div className={styles.content}>
          <Navbar noSpacer={noNavSpacer}/>
          {children}
          <footer>&copy; Timo Strüker | <a href="//strueker.dev/legal/about">Imprint</a> | <a href="//strueker.dev/legal/datasec">Data Protection</a> | <a href={"https://github.com/Echelon101/strueker.net"}>Source Code</a> | This website was designed by <a href="https://kevink.dev" target="_blank" rel="noreferrer">Kevin Kandlbinder</a></footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
