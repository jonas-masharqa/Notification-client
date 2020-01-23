import React, { useState } from 'react'
import openSocket from 'socket.io-client'

const ViewMessage = () => {
  const [allMessages, setAllMessages] = useState([])

  let message

  const socket = openSocket('http://localhost:5000')

  if (allMessages) {
    message = allMessages.map(message => {
      return <div>{message}</div>
    })
  }

  socket.on('chat', (data) => {
    setAllMessages([...allMessages, data])
  })

  return (
    <>
      <div>
        {message}
      </div>
    </>
  )
}

export default ViewMessage
