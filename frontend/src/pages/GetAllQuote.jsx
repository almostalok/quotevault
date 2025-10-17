import React, { useState, useEffect } from 'react'

const GetAllQuote = () => {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAllQuotes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/quotes')
        if (!response.ok) throw new Error('Failed to fetch quotes')
        const data = await response.json()
        setQuotes(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAllQuotes()
  }, [])

  return (
    <div style={{
      maxWidth: '800px',
      width: '100%',
      padding: '30px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: '15px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      maxHeight: '80vh',
      overflow: 'auto'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem', color: '#fff' }}>
        All Quotes ({quotes.length})
      </h2>

      {loading && <p style={{ textAlign: 'center', color: '#aaa' }}>Loading quotes...</p>}
      
      {error && (
        <p style={{ textAlign: 'center', color: '#ff6b6b' }}>
          Error: {error}
        </p>
      )}

      {!loading && quotes.length === 0 && (
        <p style={{ textAlign: 'center', color: '#aaa' }}>No quotes found.</p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {quotes.map((quote, index) => (
          <div
            key={quote.id || index}
            style={{
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(31, 79, 161, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <p style={{
              fontSize: '1.1rem',
              fontStyle: 'italic',
              marginBottom: '10px',
              color: '#fff',
              lineHeight: '1.6'
            }}>
              "{quote.text}"
            </p>
            <p style={{
              fontSize: '0.95rem',
              color: '#1f4fa1ff',
              fontWeight: 'bold',
              textAlign: 'right'
            }}>
              — {quote.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetAllQuote
