import React from 'react';

const ModalOverlay = (props:any) => {
  return (
    <div id="overlay" className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60 bg-blend-darken-900"> 
    {props.children}
  </div>
  )
}

export default ModalOverlay;