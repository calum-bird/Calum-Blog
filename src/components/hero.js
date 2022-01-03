import React from 'react'

import * as styles from './hero.module.css'

const Hero = ({ title, content }) => (
  <div className={styles.hero}>
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
  </div>
)

export default Hero
