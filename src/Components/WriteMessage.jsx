import React, { useState } from 'react'
import openSocket from 'socket.io-client'
import { Header, Icon, Container, Grid } from 'semantic-ui-react'

const WriteMessage = () => {
  const [newMessage, setMessage] = useState('')

  const socket = openSocket('https://jonas-message-backend.herokuapp.com/')

  const sendMessage = () => {
    console.log('MESSAGE SENT')
    socket.emit('chat', newMessage);
    setMessage('')
  }

  return (
    <>
      <div>
        <h2>Write Your Message!</h2>
        <input
          onChange={e => setMessage(e.target.value)}
          value={newMessage}
          placeholder="Your messages goes here .."
        />
        <button onClick={() => sendMessage()}>↪</button>
      </div>
    </>
  )
}

export default WriteMessage

