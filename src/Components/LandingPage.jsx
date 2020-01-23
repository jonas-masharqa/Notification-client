import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const LandingPage = () => {
  return (
    <>
    <center>
      <Header as="h1" icon>
          <Icon name="mail" />
          Write an instant message!
          <Header.Subheader>
            Open the two links in different windows to see the magic of Websockets.
          </Header.Subheader>
        </Header>
    </center>
    </>
  )
}

export default LandingPage
