import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import quoteRoutes from './routes/quoteRoutes.js';

//enablind dotenv to inject env variable
dotenv.config();


//making server
const app=express();

//enable CORS for frontend
app.use(cors());

//middleware to parse in json
app.use(express.json());

// Rate limiting - prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply rate limiting to all API routes
app.use('/api/', limiter);

// Stricter rate limiting for POST requests (adding quotes)
const postLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 POST requests per hour
  message: 'Too many quotes added from this IP, please try again after an hour',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply stricter rate limiting to POST routes
app.use('/api/quotes', (req, res, next) => {
  if (req.method === 'POST') {
    return postLimiter(req, res, next);
  }
  next();
}, quoteRoutes);

const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
