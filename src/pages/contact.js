import React from 'react'

import Container from '../components/container'
import Hero from '../components/hero'
import Layout from '../components/layout'

class ContactIndex extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <Hero
          title="Contact Me"
          content="Email: calum@trelent.net"
        />
        <Container>
            I will try my best try to answer all emails sent my way. It is helpful to provide a clear, non-generic subject line so that your email is not lost in the abyss. If I miss one, I apologize. Don't take it personally, I was probably just in a rush that week.
        </Container>
      </Layout>
    )
  }
}

export default ContactIndex