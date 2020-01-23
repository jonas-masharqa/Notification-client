import React, { useState } from 'react'
import openSocket from 'socket.io-client'

const WriteMessage = () => {
  const [newMessage, setMessage] = useState('')

  const socket = openSocket('http://localhost:5000')

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
          placeholder="Your messages goes here .."
        />
        <button onClick={() => sendMessage()}>↪</button>
      </div>
    </>
  )
}

export default WriteMessage
