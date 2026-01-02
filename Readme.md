                                                Password Reset Backend

## Overview
This project implements a secure password reset flow for the backend service.

## Features
- User authentication
- Secure token generation
- Email notification system
- Password validation
- Database integration

## Prerequisites
- Node.js (v14+)
- Database (MongoDB/SQL)
- Email service (SendGrid/SMTP)


## Configuration
Create a `.env` file with the following variables:
```
DATABASE_URL=your_database_url
EMAIL_SERVICE=your_email_service
JWT_SECRET=your_secret_key
RESET_TOKEN_EXPIRY=3600
```

## Usage
```bash
npm start
```

## API Endpoints
- 'POST /api/auth/register' - Register
- 'POST /api/auth/login' - Login
- 'POST /api/auth/forgot-password' - Forgot password
- 'POST /api/auth/reset-password' - Reset Password


📘 API Documentation All endpoints are documented and tested using Postman.

https://documenter.getpostman.com/view/50931750/2sBXVckCWk

🚀 Deployment Deployed the API using

Render

https://resetpass-backend-3.onrender.com

## Security
- Tokens expire after 1 hour
- Password hashing with bcrypt
- HTTPS enforced
- Rate limiting enabled

## License
MIT