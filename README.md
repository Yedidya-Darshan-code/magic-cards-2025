# Magic Card Trick Application

A web application that creates a mystifying card trick experience. Select 4 playing cards, and watch as the application magically determines a 5th card through a proprietary prediction algorithm.

## Overview

This application consists of:
- A React frontend for interactive card selection
- A Flask backend that powers the magic prediction
- A responsive UI that works on various devices

## Features

- Interactive card selection interface
- Mystifying card prediction algorithm
- Elegant visual design with smooth animations
- Display of playing card images

## Technology Stack

- **Frontend**: React.js
- **Backend**: Flask (Python)
- **Styling**: CSS-in-JS with inline styles

## Project Structure

```
magic-cards-2025/
├── client/                     # React frontend
│   ├── build/                  # Production build
│   ├── public/                 # Static assets
│   └── src/                    # React source code
│       ├── components/         # React components
│       │   ├── CardDisplay.js  # Displays card result
│       │   ├── CardSelector.js # Card selection dropdown
│       │   └── MagicCardApp.js # Main application component
│       ├── App.js              # Application container
│       └── index.js            # React entry point
├── project/                    # Flask backend
│   ├── controllers/            # API endpoints
│   │   └── card_controller.py  # Card API routes
│   ├── models/                 # Domain models
│   │   └── card.py             # Card model
│   ├── services/               # Business logic
│   │   └── card_service.py     # Card prediction service
│   └── static/                 # Static files
│       └── static/
│           └── cards/          # Card images
├── app.py                      # Flask application entry point
└── requirements.txt            # Python dependencies
```

## Setup and Installation

### Prerequisites
- Python 3.6+
- Node.js and npm

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Yedidya-Darshan-code/magic-cards-2025.git
   cd magic-cards-2025
   ```

2. Set up a Python virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install Python dependencies automatically:
   ```bash
   pip install -r requirements.txt
   ```

### Frontend Setup
1. Install Node.js dependencies:
   ```bash
   cd client
   npm install
   ```

2. Build the React app:
   ```bash
   npm run build
   ```

### Running the Application
1. From the project root, run:
   ```bash
   python app.py
   ```

2. Open a browser and navigate to:
   ```
   http://localhost:5000
   ```

## Development

### Running in Development Mode
1. Run the Flask backend:
   ```bash
   python app.py
   ```

2. In a separate terminal, run the React development server:
   ```bash
   cd client
   npm start
   ```

3. The React dev server will run on port 3000, and API requests will be proxied to the Flask backend.

## Author
Yedidya Darshan - yedidya.darshan@gmail.com

## License
© 2025 Yedidya Darshan Magic Tricks