# Rate Limiting & Security 🔒

## Rate Limiting Implemented

### General API Rate Limit
- **Window**: 15 minutes
- **Max Requests**: 100 requests per IP
- **Applies to**: All `/api/*` routes
- **Message**: "Too many requests from this IP, please try again after 15 minutes"

### POST Request Rate Limit (Adding Quotes)
- **Window**: 1 hour  
- **Max Requests**: 10 POST requests per IP
- **Applies to**: `POST /api/quotes`
- **Message**: "Too many quotes added from this IP, please try again after an hour"

## How It Works

The backend uses `express-rate-limit` middleware to:
1. Track requests by IP address
2. Count requests within the time window
3. Block excessive requests
4. Return proper HTTP 429 (Too Many Requests) status codes
5. Include rate limit info in response headers

## Response Headers

When rate limiting is active, the following headers are included:
- `RateLimit-Limit`: Maximum number of requests allowed
- `RateLimit-Remaining`: Number of requests remaining
- `RateLimit-Reset`: Time when the rate limit resets (Unix timestamp)

## Benefits

✅ **Prevents Abuse**: Stops malicious users from overwhelming the server
✅ **Protects Resources**: Prevents denial-of-service attacks
✅ **Fair Usage**: Ensures equal access for all users
✅ **Database Protection**: Limits excessive POST requests that could fill up storage

## Quotes Database

The `quotes.json` file now contains **100 inspirational quotes** from various famous authors including:
- Walt Disney
- Steve Jobs
- Albert Einstein
- Nelson Mandela
- Winston Churchill
- Maya Angelou
- And many more!

## Testing Rate Limits

You can test the rate limits by:
1. Making 100+ requests quickly to see the general rate limit
2. Adding 10+ quotes within an hour to see the POST rate limit
3. Checking the response headers for rate limit information

## Future Enhancements

Consider adding:
- User authentication with different rate limits per user tier
- Redis-based rate limiting for distributed systems
- Custom rate limits for different endpoints
- Rate limit bypass for authenticated admin users
