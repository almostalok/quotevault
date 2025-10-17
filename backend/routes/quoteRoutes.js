import express from 'express';
import { getAllQuotes, getRandomQuote, addQuote } from '../controllers/quoteController.js';

const router = express.Router();

// GET /api/quotes -> all quotes
router.get('/', getAllQuotes);

// GET /api/quotes/random -> one random quote
router.get('/random', getRandomQuote);

// POST /api/quotes -> add a new quote
router.post('/', addQuote);

export default router;