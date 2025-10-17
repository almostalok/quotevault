import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GetAllQuote from './pages/GetAllQuote'
import GetRandomQuote from './pages/GetRandomQuote'
import PostQuote from './pages/PostQuote'
import ApiDocs from './pages/ApiDocs'

const App = () => {
  return (
    <Router>
      <div style={{ 
        width: '100%', 
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header />
        
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Link to="/" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            padding: '10px 20px', 
            backgroundColor: '#1f4fa1', 
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>
            Random Quote
          </Link>
          <Link to="/all-quotes" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            padding: '10px 20px', 
            backgroundColor: '#1f4fa1', 
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>
            All Quotes
          </Link>
          <Link to="/add-quote" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            padding: '10px 20px', 
            backgroundColor: '#1f4fa1', 
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>
            Add Quote
          </Link>
          <Link to="/api-docs" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            padding: '10px 20px', 
            backgroundColor: '#2ecc71', 
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>
            API Docs
          </Link>
        </nav>

        <main style={{ 
          flex: 1, 
          padding: '40px 20px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          minHeight: '400px'
        }}>
          <Routes>
            <Route path="/" element={<GetRandomQuote />} />
            <Route path="/all-quotes" element={<GetAllQuote />} />
            <Route path="/add-quote" element={<PostQuote />} />
            <Route path="/api-docs" element={<ApiDocs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App