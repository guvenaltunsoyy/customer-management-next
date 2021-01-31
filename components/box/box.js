
import React from 'react'

import styles from './index.module.css'
import clsx from "clsx";

function Box({ children, className, ...rest }) {
  return (
    <div className={clsx(styles.box, className)} {...rest}>
      {children}
    </div>
  )
}

export default Box
