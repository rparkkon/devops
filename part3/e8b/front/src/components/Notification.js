import React from 'react';

//2.18 puhelinluettelo osa 11 parempi virhe
const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className="error">
      {message}
    </div>
  )
}

export default Notification