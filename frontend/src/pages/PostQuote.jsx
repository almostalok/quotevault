import React, { useState } from 'react'

const PostQuote = () => {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('http://localhost:5000/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, author })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to add quote')
      }

      const data = await response.json()
      setSuccess(true)
      setText('')
      setAuthor('')
      
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

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
        Add New Quote
      </h2>

      {error && (
        <div style={{
          padding: '15px',
          marginBottom: '20px',
          backgroundColor: 'rgba(255, 107, 107, 0.2)',
          border: '1px solid #ff6b6b',
          borderRadius: '8px',
          color: '#ff6b6b',
          textAlign: 'center'
        }}>
          {error}
        </div>
      )}

      {success && (
        <div style={{
          padding: '15px',
          marginBottom: '20px',
          backgroundColor: 'rgba(76, 209, 55, 0.2)',
          border: '1px solid #4cd137',
          borderRadius: '8px',
          color: '#4cd137',
          textAlign: 'center'
        }}>
          Quote added successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '1rem',
            color: '#fff',
            fontWeight: '500'
          }}>
            Quote Text *
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            rows="4"
            placeholder="Enter the quote..."
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#fff',
              resize: 'vertical',
              fontFamily: 'inherit'
            }}
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '1rem',
            color: '#fff',
            fontWeight: '500'
          }}>
            Author *
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            placeholder="Enter the author name..."
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#fff',
              fontFamily: 'inherit'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
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
          {loading ? 'Adding Quote...' : 'Add Quote'}
        </button>
      </form>
    </div>
  )
}

export default PostQuote
