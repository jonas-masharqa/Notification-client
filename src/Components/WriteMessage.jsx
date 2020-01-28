import React, { useState } from 'react'
import openSocket from 'socket.io-client'
import NeonLines from '../Images/neon-lines.jpg'
import { Button, TextArea } from 'semantic-ui-react'

const WriteMessage = () => {
  const lines = <img id="lines-pic" src={NeonLines} alt="Neon Lines Picture" />

  const [newMessage, setMessage] = useState('')

  const socket = openSocket('https://jonas-message-backend.herokuapp.com/')

  const sendMessage = () => {
    console.log('MESSAGE SENT')
    socket.emit('chat', newMessage)
    setMessage('')
  }

  return (
    <>
      <center>
        <div id="write-container">
          <div id="lines-pic">{lines}</div>
          <div id="input">
            <div>
              <h1>Write Your Message!</h1>
              <TextArea
                onChange={e => setMessage(e.target.value)}
                value={newMessage}
                placeholder="Your messages goes here .."
                id="text-area"
              />
            </div>
            <Button onClick={() => sendMessage()}>Send</Button>
          </div>
        </div>
      </center>
    </>
  )
}

export default WriteMessage
