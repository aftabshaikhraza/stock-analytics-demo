# 📊 Stock Analytics App

A full-stack stock analytics dashboard built using **Next.js (Frontend)** and **FastAPI (Backend)** that fetches real-time stock data using the **Financial Modeling Prep API**.
---

## 🚀 Features

- 📈 Company overview and real-time stock price
- 🧾 Latest income statement and market cap
- 📊 7-day price history chart
- 🔍 Ticker search support (e.g., AAPL, MSFT, TSLA)
- ⚡ FastAPI backend with clean endpoints
- 💅 Tailwind CSS-powered frontend

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** FastAPI (Python)
- **API:** Financial Modeling Prep
- **Deployment-ready:** Fully modular and clean project structure

---

## 📦 Folder Structure
stock-analytics-demo/
├── backend/
│   ├── main.py
│   ├── fmp.py
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── pages/
│   ├── public/
│   ├── styles/
│   ├── package.json
│   └── …

---

## ⚙️ Local Setup

### Step 1: Clone the Repo

bash
git clone https://github.com/aftabshaikhraza/stock-analytics-demo.git
cd stock-analytics-demo

### Step 2: Backend Setup
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

Create a .env file with your API key:
FMP_API_KEY=your_actual_api_key

Start the backend server:
uvicorn main:app --reload

### Step 3: Frontend Server
In a separate terminal:

cd frontend
npm install
npm run dev

Visit: http://localhost:3000

Example Tickers to Try
	•	AAPL – Apple Inc.
	•	MSFT – Microsoft
	•	TSLA – Tesla
	•	GOOGL – Alphabet
