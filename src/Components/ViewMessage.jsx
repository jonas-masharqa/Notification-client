import React, { useState } from 'react'
import NeonMessage from '../Images/message.jpg'
import openSocket from 'socket.io-client'
import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const ViewMessage = () => {
  const [allMessages, setAllMessages] = useState([])

  const background = (
    <img id="message-pic" src={NeonMessage} alt="Neon Message Picture" />
  )

  let messageV

  const socket = openSocket('https://jonas-message-backend.herokuapp.com/')

  if (allMessages) {
    messageV = allMessages.map(message => {
      return (
        <div className="bubbleWrapper">
          <div className="inlineContainer">
            <img
              className="inlineIcon"
              src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
            ></img>
            <div className="otherBubble other">{message}</div>
          </div>
          <span className="other"></span>
        </div>
      )
    })
  }

  socket.on('chat', data => {
    setAllMessages([...allMessages, data])
  })

  return (
    <>
      <div id="bg-image">
      <NavLink to='/'>
        <Button>Back</Button>
      </NavLink>
        {background}
        <h1 id="view-header">Your Messages</h1>
        <div>{messageV}</div>
      </div>
    </>
  )
}

export default ViewMessage
