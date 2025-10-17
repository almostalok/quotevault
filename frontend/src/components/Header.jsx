import React from 'react'

const Header = () => {
  return (
    <header style={{
      padding: '30px 20px',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderBottom: '2px solid rgba(31, 79, 161, 0.5)'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, #1f4fa1ff, #4a90e2)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        margin: 0
      }}>
        QuoteVault
      </h1>
      <p style={{
        marginTop: '10px',
        fontSize: '1.1rem',
        color: 'rgba(255, 255, 255, 0.7)'
      }}>
        Your collection of inspiring quotes
      </p>
    </header>
  )
}

export default Header