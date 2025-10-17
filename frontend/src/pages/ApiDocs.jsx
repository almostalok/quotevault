import React, { useState } from 'react'

const ApiDocs = () => {
  const [apiResponse, setApiResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const testRandomQuoteApi = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:5000/api/quotes/random')
      const data = await response.json()
      setApiResponse(data)
    } catch (err) {
      setApiResponse({ error: err.message })
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  }

  return (
    <div style={{
      maxWidth: '900px',
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
        API Documentation
      </h2>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#1f4fa1', marginBottom: '15px' }}>📚 Available Endpoints</h3>
        
        {/* Get Random Quote */}
        <div style={{
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '10px',
          marginBottom: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h4 style={{ color: '#4a90e2', marginBottom: '10px' }}>
            GET /api/quotes/random
          </h4>
          <p style={{ color: '#ccc', marginBottom: '15px' }}>
            Get a random quote from the database
          </p>
          
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '15px',
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            marginBottom: '10px',
            position: 'relative'
          }}>
            <button
              onClick={() => copyToClipboard('fetch(\'http://localhost:5000/api/quotes/random\')\n  .then(res => res.json())\n  .then(data => console.log(data))')}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '5px 10px',
                fontSize: '0.8rem',
                backgroundColor: '#1f4fa1',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Copy
            </button>
            <pre style={{ margin: 0, color: '#4a90e2' }}>
{`fetch('http://localhost:5000/api/quotes/random')
  .then(res => res.json())
  .then(data => console.log(data))`}
            </pre>
          </div>

          <button
            onClick={testRandomQuoteApi}
            disabled={loading}
            style={{
              padding: '10px 20px',
              backgroundColor: '#1f4fa1',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold'
            }}
          >
            {loading ? 'Testing...' : 'Test API'}
          </button>

          {apiResponse && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '8px',
              border: '1px solid rgba(74, 144, 226, 0.3)'
            }}>
              <p style={{ color: '#4a90e2', marginBottom: '5px', fontWeight: 'bold' }}>Response:</p>
              <pre style={{ margin: 0, color: '#4cd137', fontSize: '0.85rem', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Get All Quotes */}
        <div style={{
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '10px',
          marginBottom: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h4 style={{ color: '#4a90e2', marginBottom: '10px' }}>
            GET /api/quotes
          </h4>
          <p style={{ color: '#ccc', marginBottom: '15px' }}>
            Get all quotes from the database
          </p>
          
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '15px',
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            position: 'relative'
          }}>
            <button
              onClick={() => copyToClipboard('fetch(\'http://localhost:5000/api/quotes\')\n  .then(res => res.json())\n  .then(data => console.log(data))')}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '5px 10px',
                fontSize: '0.8rem',
                backgroundColor: '#1f4fa1',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Copy
            </button>
            <pre style={{ margin: 0, color: '#4a90e2' }}>
{`fetch('http://localhost:5000/api/quotes')
  .then(res => res.json())
  .then(data => console.log(data))`}
            </pre>
          </div>
        </div>

        {/* POST Quote */}
        <div style={{
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '10px',
          marginBottom: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h4 style={{ color: '#4a90e2', marginBottom: '10px' }}>
            POST /api/quotes
          </h4>
          <p style={{ color: '#ccc', marginBottom: '15px' }}>
            Add a new quote to the database
          </p>
          
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '15px',
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            position: 'relative'
          }}>
            <button
              onClick={() => copyToClipboard(`fetch('http://localhost:5000/api/quotes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    text: 'Your quote here',
    author: 'Author name'
  })
})
  .then(res => res.json())
  .then(data => console.log(data))`)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '5px 10px',
                fontSize: '0.8rem',
                backgroundColor: '#1f4fa1',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Copy
            </button>
            <pre style={{ margin: 0, color: '#4a90e2' }}>
{`fetch('http://localhost:5000/api/quotes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    text: 'Your quote here',
    author: 'Author name'
  })
})
  .then(res => res.json())
  .then(data => console.log(data))`}
            </pre>
          </div>
        </div>
      </div>

      {/* Rate Limits */}
      <div style={{
        padding: '20px',
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 107, 107, 0.3)'
      }}>
        <h3 style={{ color: '#ff6b6b', marginBottom: '10px' }}>⚠️ Rate Limits</h3>
        <ul style={{ color: '#ccc', lineHeight: '1.8' }}>
          <li><strong>GET requests:</strong> 100 requests per 15 minutes per IP</li>
          <li><strong>POST requests:</strong> 10 requests per hour per IP</li>
          <li>Rate limit headers are included in responses</li>
        </ul>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: 'rgba(76, 209, 55, 0.1)',
        borderRadius: '10px',
        border: '1px solid rgba(76, 209, 55, 0.3)'
      }}>
        <h3 style={{ color: '#4cd137', marginBottom: '10px' }}>💡 Usage Tips</h3>
        <ul style={{ color: '#ccc', lineHeight: '1.8' }}>
          <li>Use <code style={{ color: '#4a90e2' }}>/api/quotes/random</code> for quote-of-the-day features</li>
          <li>All endpoints are CORS-enabled for browser access</li>
          <li>Responses are in JSON format</li>
          <li>No authentication required (public API)</li>
        </ul>
      </div>
    </div>
  )
}

export default ApiDocs
