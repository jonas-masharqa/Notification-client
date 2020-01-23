import React, { useState } from 'react';
import openSocket from 'socket.io-client';

const WriteMessage = () => {
  const [newMessage, setMessage] = useState('')

  const socket = openSocket('http://localhost:5000');
  return (
    <>
    </>
  )
}

export default WriteMessage
