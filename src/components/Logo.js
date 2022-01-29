import React from 'react'

function Logo(props) {
  return (
    <img
      alt="Logo"
      style={{
        width: 50,
        height: 50,
        borderRadius: 5,
      }}
      src="/media/logo.png"
      {...props}
    />
  )
}

export default Logo
