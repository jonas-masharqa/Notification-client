import React from 'react'
import NeonArrow from '../Images/neon-arrows.jpg'
import { Header, Icon, Container, Grid } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {
  const arrow = <img id="arrow-pic" src={NeonArrow} alt="Neon Arrow" />
  return (
    <>
    <center>
      <div id='header-container'>
        <div id='header-banner'>{arrow}</div>
          <Header id='landing-header'as="h1" icon>
            <Icon name="mail" />
            Write an instant message!
            <Header.Subheader id='landing-subheader'>
              Open the two links in different windows to see the magic of Websockets.
            </Header.Subheader>
          </Header>
        </div>
        <Container id='landing-container'>
          <Grid centered container columns={2}>
            <NavLink className='landing-link' to='write'>
              <h3>Click here to write a message</h3>
              <Icon name='compose' size='massive' color='black' />
            </NavLink>
            <NavLink className='landing-link' to='view'>
              <h3>Click here to view your message in realtime</h3>
              <Icon name='chat' size='massive' color='black' />
            </NavLink>
          </Grid>
        </Container>
    </center>
    </>
  )
}

export default LandingPage
