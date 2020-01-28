import React, { useState } from 'react'
import openSocket from 'socket.io-client'
import NeonLines from '../Images/neon-lines.jpg'
import { Button, Form } from 'semantic-ui-react'

const WriteMessage = () => {
  const lines = <img id="lines-pic" src={NeonLines} alt="Neon Lines Picture" />

  const [newMessage, setMessage] = useState('')

  const [alertMessage, setAlertMessage] = useState(null)

  const socket = openSocket('https://jonas-message-backend.herokuapp.com/')

  const inputHandler = (e) => {
    setMessage(e.target.value)
    setAlertMessage(null)
  }

  const sendMessage = () => {
    if (newMessage.length > 0) {
      socket.emit('chat', newMessage)
      console.log('MESSAGE SENT')
    } else {
      setAlertMessage('Please write a message before hitting send!')
    }
    setMessage('')
  }

  return (
    <>
      <center>
        <div id="write-container">
          <div id="lines-pic">{lines}</div>
          <div id="input">
              <h1>Write Your Message!</h1>
              <Form.TextArea
                onChange={inputHandler}
                value={newMessage}
                placeholder="Your messages goes here .."
                id="text-area"
                error={ alertMessage ? {
                  content: `${alertMessage}`
                } : null}
              />
            <br />
            <Button onClick={() => sendMessage()}>Send</Button>
          </div>
        </div>
      </center>
    </>
  )
}

export default WriteMessage
