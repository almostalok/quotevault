import React, { useState, useEffect } from 'react'

const GetRandomQuote = () => {
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchRandomQuote = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('http://localhost:5000/api/quotes/random')
      if (!response.ok) throw new Error('Failed to fetch quote')
      const data = await response.json()
      setQuote(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomQuote()
  }, [])

  return (
    <div style={{
      maxWidth: '600px',
      width: '100%',
      padding: '30px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: '15px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem', color: '#fff' }}>
        Random Quote
      </h2>

      {loading && <p style={{ textAlign: 'center', color: '#aaa' }}>Loading...</p>}
      
      {error && (
        <p style={{ textAlign: 'center', color: '#ff6b6b' }}>
          Error: {error}
        </p>
      )}

      {quote && (
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            marginBottom: '20px',
            color: '#fff',
            lineHeight: '1.6'
          }}>
            "{quote.text}"
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: '#1f4fa1ff',
            fontWeight: 'bold'
          }}>
            — {quote.author}
          </p>
        </div>
      )}

      <button
        onClick={fetchRandomQuote}
        disabled={loading}
        style={{
          marginTop: '30px',
          width: '100%',
          padding: '15px',
          fontSize: '1rem',
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: '#1f4fa1ff',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.3s',
          opacity: loading ? 0.6 : 1
        }}
        onMouseOver={(e) => !loading && (e.target.style.backgroundColor = '#2a5fc4')}
        onMouseOut={(e) => !loading && (e.target.style.backgroundColor = '#1f4fa1ff')}
      >
        {loading ? 'Loading...' : 'Get Another Quote'}
      </button>
    </div>
  )
}

export default GetRandomQuote
