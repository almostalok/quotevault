# 💬 QuoteVault

<div align="center">

![QuoteVault Banner](https://img.shields.io/badge/QuoteVault-Inspirational%20Quotes%20API-blue?style=for-the-badge)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-v19+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)

**A free, open-source REST API for inspirational quotes with a beautiful web interface**

[Live Demo](#) • [API Docs](#api-documentation) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📖 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
  - [Endpoints](#endpoints)
  - [Quick Start](#quick-start)
  - [Code Examples](#code-examples)
- [Integration Guide](#integration-guide)
  - [Website Widget](#website-widget)
  - [Discord Bot](#discord-bot)
  - [Mobile Apps](#mobile-apps)
  - [Command Line](#command-line)
- [Rate Limiting](#rate-limiting)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About The Project

**QuoteVault** is a full-stack web application that provides a free, easy-to-use REST API for accessing inspirational quotes. Whether you're building a motivational app, a Discord bot, a website widget, or just need some inspiration in your terminal, QuoteVault has you covered with 100+ carefully curated quotes from world-renowned authors and thinkers.

### Why QuoteVault?

- 🔓 **No Authentication Required** - Start using immediately, no API keys needed
- 🌐 **CORS Enabled** - Access from any domain or application
- 🚀 **Lightning Fast** - Built with Express.js for optimal performance
- 🎨 **Beautiful Web Interface** - Manage and browse quotes with an intuitive UI
- 🛡️ **Rate Limited** - Protected against abuse while remaining generous for normal use
- 📚 **100+ Quotes** - Diverse collection from famous authors, entrepreneurs, and leaders
- 💻 **Developer Friendly** - Simple JSON responses, clear documentation, and examples

### Perfect For

- 🤖 Building bots (Discord, Slack, Telegram)
- 📱 Mobile app development
- 🌐 Website widgets and quote-of-the-day features
- 🎓 Learning REST API integration
- 📧 Email automation and newsletters
- 🖥️ Terminal customization
- 🎨 Creative projects and hackathons

---

## ✨ Features

### API Features
- ✅ Get random inspirational quotes
- ✅ Retrieve all quotes from the database
- ✅ Add new quotes via POST requests
- ✅ RESTful API design
- ✅ JSON response format
- ✅ Rate limiting for security
- ✅ CORS enabled for cross-origin requests

### Web Interface Features
- ✅ View random quotes with one click
- ✅ Browse all quotes in an organized list
- ✅ Add new quotes through a user-friendly form
- ✅ Interactive API documentation
- ✅ Responsive design for all devices
- ✅ Modern, glassmorphism UI design
- ✅ Real-time API testing

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **express-rate-limit** - Rate limiting middleware
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 19** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS-in-JS** - Inline styling

### Database
- **JSON File Storage** - Simple, lightweight data persistence

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

Check your versions:
```bash
node --version
npm --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/quotevault.git
   cd quotevault
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Create environment file (optional)**
   ```bash
   cd ../backend
   touch .env
   ```
   Add the following to `.env`:
   ```env
   PORT=5000
   ```

### Running the Application

#### Option 1: Run Both Servers Separately

**Terminal 1 - Backend Server:**
```bash
cd backend
npm start
```
Backend will run on `http://localhost:5000`

**Terminal 2 - Frontend Development Server:**
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

#### Option 2: Production Build

```bash
# Build frontend
cd frontend
npm run build

# Serve static files from backend (requires setup)
cd ../backend
npm start
```

### Verify Installation

Open your browser and navigate to:
- **Frontend**: http://localhost:5173
- **API**: http://localhost:5000/api/quotes/random

You should see the QuoteVault interface and a JSON response respectively.

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/quotes/random` | Get a single random quote | No |
| GET | `/quotes` | Get all quotes | No |
| POST | `/quotes` | Add a new quote | No |

---

### Quick Start

#### Get a Random Quote

**Request:**
```http
GET http://localhost:5000/api/quotes/random
```

**Response:**
```json
{
  "id": 42,
  "text": "You are enough just as you are.",
  "author": "Meghan Markle"
}
```

#### Get All Quotes

**Request:**
```http
GET http://localhost:5000/api/quotes
```

**Response:**
```json
[
  {
    "id": 1,
    "text": "The best way to get started is to quit talking and begin doing.",
    "author": "Walt Disney"
  },
  {
    "id": 2,
    "text": "Don't let yesterday take up too much of today.",
    "author": "Will Rogers"
  }
  // ... 98 more quotes
]
```

#### Add a New Quote

**Request:**
```http
POST http://localhost:5000/api/quotes
Content-Type: application/json

{
  "text": "Your amazing quote here",
  "author": "Author Name"
}
```

**Response:**
```json
{
  "id": 101,
  "text": "Your amazing quote here",
  "author": "Author Name"
}
```

---

### Code Examples

#### JavaScript (Browser/Node.js)
```javascript
// Get random quote
fetch('http://localhost:5000/api/quotes/random')
  .then(response => response.json())
  .then(quote => {
    console.log(`"${quote.text}" - ${quote.author}`);
  })
  .catch(error => console.error('Error:', error));

// Using async/await
async function getRandomQuote() {
  try {
    const response = await fetch('http://localhost:5000/api/quotes/random');
    const quote = await response.json();
    return quote;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

#### Python
```python
import requests

# Get random quote
response = requests.get('http://localhost:5000/api/quotes/random')
quote = response.json()

print(f'"{quote["text"]}" - {quote["author"]}')

# Add new quote
new_quote = {
    "text": "Your quote here",
    "author": "Your Name"
}
response = requests.post(
    'http://localhost:5000/api/quotes',
    json=new_quote
)
print(response.json())
```

#### cURL
```bash
# Get random quote
curl http://localhost:5000/api/quotes/random

# Get all quotes
curl http://localhost:5000/api/quotes

# Add new quote
curl -X POST http://localhost:5000/api/quotes \
  -H "Content-Type: application/json" \
  -d '{"text":"Your quote","author":"Your Name"}'
```

#### jQuery
```javascript
$.ajax({
  url: 'http://localhost:5000/api/quotes/random',
  method: 'GET',
  success: function(quote) {
    $('#quote').text(quote.text);
    $('#author').text(quote.author);
  }
});
```

---

## 🔌 Integration Guide

### Website Widget

Add a "Quote of the Day" to your website:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Daily Quote</title>
  <style>
    .quote-container {
      max-width: 600px;
      margin: 50px auto;
      padding: 30px;
      background: #f5f5f5;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .quote-text {
      font-size: 1.5rem;
      font-style: italic;
      margin-bottom: 15px;
    }
    .quote-author {
      font-size: 1.2rem;
      color: #666;
      text-align: right;
    }
  </style>
</head>
<body>
  <div class="quote-container">
    <div class="quote-text" id="quote-text">Loading...</div>
    <div class="quote-author" id="quote-author"></div>
  </div>

  <script>
    async function loadQuote() {
      try {
        const response = await fetch('http://localhost:5000/api/quotes/random');
        const quote = await response.json();
        
        document.getElementById('quote-text').textContent = `"${quote.text}"`;
        document.getElementById('quote-author').textContent = `— ${quote.author}`;
      } catch (error) {
        document.getElementById('quote-text').textContent = 'Failed to load quote';
      }
    }
    
    // Load quote on page load
    loadQuote();
  </script>
</body>
</html>
```

### Discord Bot

Create a quote bot for Discord using discord.js:

```javascript
const { Client, GatewayIntentBits } = require('discord.js');
const fetch = require('node-fetch');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('messageCreate', async (message) => {
  if (message.content === '!quote') {
    try {
      const response = await fetch('http://localhost:5000/api/quotes/random');
      const quote = await response.json();
      
      message.reply(`"${quote.text}" - **${quote.author}**`);
    } catch (error) {
      message.reply('Failed to fetch quote. Please try again!');
    }
  }
});

client.login('YOUR_BOT_TOKEN');
```

### Mobile Apps

#### React Native
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuoteScreen = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/quotes/random');
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <View style={styles.container}>
      {quote && (
        <>
          <Text style={styles.quoteText}>"{quote.text}"</Text>
          <Text style={styles.authorText}>— {quote.author}</Text>
        </>
      )}
      <Button 
        title={loading ? "Loading..." : "Get New Quote"} 
        onPress={fetchQuote}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  quoteText: {
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 15,
    textAlign: 'center',
  },
  authorText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
});

export default QuoteScreen;
```

#### Flutter
```dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class QuoteScreen extends StatefulWidget {
  @override
  _QuoteScreenState createState() => _QuoteScreenState();
}

class _QuoteScreenState extends State<QuoteScreen> {
  String quoteText = 'Loading...';
  String author = '';
  bool isLoading = false;

  Future<void> fetchQuote() async {
    setState(() => isLoading = true);
    
    try {
      final response = await http.get(
        Uri.parse('http://localhost:5000/api/quotes/random')
      );
      
      if (response.statusCode == 200) {
        final quote = json.decode(response.body);
        setState(() {
          quoteText = quote['text'];
          author = quote['author'];
        });
      }
    } catch (e) {
      print('Error: $e');
    } finally {
      setState(() => isLoading = false);
    }
  }

  @override
  void initState() {
    super.initState();
    fetchQuote();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('QuoteVault')),
      body: Padding(
        padding: EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              '"$quoteText"',
              style: TextStyle(fontSize: 20, fontStyle: FontStyle.italic),
              textAlign: TextAlign.center,
            ),
            SizedBox(height: 15),
            Text(
              '— $author',
              style: TextStyle(fontSize: 16, color: Colors.grey),
            ),
            SizedBox(height: 30),
            ElevatedButton(
              onPressed: isLoading ? null : fetchQuote,
              child: Text(isLoading ? 'Loading...' : 'Get New Quote'),
            ),
          ],
        ),
      ),
    );
  }
}
```

### Command Line

Add a quote to your terminal startup (`.bashrc` or `.zshrc`):

```bash
# Add to ~/.bashrc or ~/.zshrc
echo ""
echo "💭 Quote of the Day:"
curl -s http://localhost:5000/api/quotes/random | \
  python3 -c "import sys, json; q=json.load(sys.stdin); print(f'\033[1;36m\"{q[\"text\"]}\"\033[0m\n\033[0;33m— {q[\"author\"]}\033[0m')"
echo ""
```

Or create a simple quote command:

```bash
# Save as ~/bin/quote
#!/bin/bash
curl -s http://localhost:5000/api/quotes/random | python3 -c "
import sys, json
quote = json.load(sys.stdin)
print(f'\033[1;36m\"{quote[\"text\"]}\"\033[0m')
print(f'\033[0;33m— {quote[\"author\"]}\033[0m')
"

# Make it executable
chmod +x ~/bin/quote

# Use it
quote
```

---

## 🛡️ Rate Limiting

To ensure fair usage and prevent abuse, the API implements rate limiting:

| Request Type | Limit | Window | Status Code |
|--------------|-------|--------|-------------|
| **GET** requests | 100 requests | 15 minutes | 429 if exceeded |
| **POST** requests | 10 requests | 1 hour | 429 if exceeded |

### Rate Limit Headers

Every API response includes headers with rate limit information:

```http
RateLimit-Limit: 100
RateLimit-Remaining: 95
RateLimit-Reset: 1729206180
```

- **RateLimit-Limit**: Maximum number of requests allowed
- **RateLimit-Remaining**: Number of requests remaining in the current window
- **RateLimit-Reset**: Unix timestamp when the limit resets

### Handling Rate Limits

```javascript
async function fetchWithRateLimit() {
  const response = await fetch('http://localhost:5000/api/quotes/random');
  
  // Check rate limit headers
  const remaining = response.headers.get('RateLimit-Remaining');
  const reset = response.headers.get('RateLimit-Reset');
  
  console.log(`Requests remaining: ${remaining}`);
  
  if (response.status === 429) {
    const resetDate = new Date(parseInt(reset) * 1000);
    console.log(`Rate limit exceeded. Resets at: ${resetDate}`);
    return null;
  }
  
  return await response.json();
}
```

---

## 📁 Project Structure

```
quotevault/
├── backend/
│   ├── controllers/
│   │   └── quoteController.js    # Business logic for quotes
│   ├── routes/
│   │   └── quoteRoutes.js        # API route definitions
│   ├── data/
│   │   └── quotes.json           # Quote database (100 quotes)
│   ├── server.js                 # Express server setup
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx        # App header
│   │   │   ├── Footer.jsx        # App footer
│   │   │   ├── Plasma.jsx        # Animated background
│   │   │   └── Plasma.css
│   │   ├── pages/
│   │   │   ├── GetRandomQuote.jsx  # Random quote page
│   │   │   ├── GetAllQuote.jsx     # All quotes page
│   │   │   ├── PostQuote.jsx       # Add quote form
│   │   │   └── ApiDocs.jsx         # API documentation
│   │   ├── App.jsx               # Main app component
│   │   ├── main.jsx              # React entry point
│   │   └── index.css             # Global styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── API_DOCUMENTATION.md          # Detailed API reference
├── HOW_TO_USE_API.md            # Integration guide
├── RATE_LIMITING.md             # Rate limiting details
├── api-example.html             # Standalone demo
└── README.md                    # This file
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Adding Quotes

Want to contribute quotes? Either:
- Use the web interface at `/add-quote`
- Submit a PR with updates to `backend/data/quotes.json`
- Use the POST API endpoint

### Guidelines

- Ensure quotes are inspirational and appropriate
- Include proper attribution to the author
- Test your changes before submitting
- Follow the existing code style
- Update documentation if needed

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📧 Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/quotevault](https://github.com/yourusername/quotevault)

---

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [express-rate-limit](https://github.com/nfriedly/express-rate-limit) - Rate limiting middleware
- All the amazing authors whose quotes inspire us daily

---

<div align="center">

**Made with ❤️ by developers, for developers**

⭐ Star this repo if you find it helpful!

</div>
