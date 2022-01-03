import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built with <a href="https://contentful.com/">Contentful</a> and{' '}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
      <a href="https://github.com/calum-bird/Calum-Blog">Source</a> &middot;{' '}
      Opinions are my own and may contain speculative information that serves for entertainment only.
    </div>
  </Container>
)

export default Footer
