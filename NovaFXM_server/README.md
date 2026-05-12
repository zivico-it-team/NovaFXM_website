# NovaFXM Server

## Project Structure

```
NovaFXM_server/
│
├── controllers/
│   └── authController.js
├── models/
│   └── User.js
├── routes/
│   └── auth.js
├── .env
├── package.json
├── server.js
└── README.md
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file (already provided) and set your MongoDB URI and JWT secret.
3. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT token
