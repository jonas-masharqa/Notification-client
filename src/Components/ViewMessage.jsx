import React from 'react'

const ViewMessage = () => {
  const [allMessages, setAllMessages] = useState([])

  const socket = openSocket('http://localhost:5000');
  
  return (
    <>
    </>
  )
}

export default ViewMessage
