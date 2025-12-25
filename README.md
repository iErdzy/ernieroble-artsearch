# 🎨 DIGITAL MASTERPIECE ARCHIEVE

## DESCRIPTION
- Digital Masterpiece Archive is a minimalist, museum-inspired web application that allows users to explore historical artworks through artificial intelligence. Using the API League Artworks API, the project lets users search for artworks by era, style, or subject — or discover a random masterpiece with a single click.


## ✨ Features

- 🔍 **Search Artworks** by era, artist, or subject  
- 🎲 **Surprise Me** mode for random masterpiece discovery  
- 🖼️ Elegant **museum-style UI** with framed artwork cards  
- ⚡ Powered by **API League Artworks API**
- 🌐 Uses **AllOrigins proxy** to bypass CORS restrictions
- 📱 Fully responsive grid layout


## 🛠️ Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Custom museum-inspired theme
- **JavaScript (ES6)** – API handling & DOM manipulation
- **Google Fonts** – Playfair Display & Inter
- **API League** – Artworks data source


## 📂 Project Structure

📁 digital-masterpiece-archive
│
├── index.html # Main HTML layout
├── style.css # Museum-themed styling
├── script.js # API logic & interactivity
└── README.md # Project documentation


## 🔑 API Configuration
This project uses the API League Artworks API.

- Current API Key Location in in script.js line 1
    'const apiKey = 'API_KEY';'
🔒 Important:
For production use, avoid exposing API keys directly in JavaScript. Consider using:
- A backend proxy
- Environment variables
- Serverless functions

## 🎯 How It Works
🔎 Search
- Enter keywords such as:
    - Renaissance
    - Impressionism
    - Portrait
    - Landscape
- Click Find Art to load up to 10 artworks.

🎲 Surprise Me
- Click Surprise Me
- The app randomly selects:
    - A topic
    - A result offset
- Displays one centered masterpiece

## ⚠️ Limitations
- API rate limits has only 50 quota each day
- Some artworks may not include images
- CORS handled via third-party proxy (AllOrigins)