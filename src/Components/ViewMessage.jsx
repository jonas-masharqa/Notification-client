import React, { useState } from 'react'
import openSocket from 'socket.io-client'

const ViewMessage = () => {
  const [allMessages, setAllMessages] = useState([])

  let message

  const socket = openSocket('https://jonas-message-backend.herokuapp.com/')

  if (allMessages) {
    message = allMessages.map(message => {
      return <div class="bubbleWrapper">
      <div class="inlineContainer">
        <img
          class="inlineIcon"
          src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
        ></img>
        <div class="otherBubble other">{message}</div>
      </div>
      <span class="other"></span>
    </div>
    })
  }

  socket.on('chat', data => {
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
