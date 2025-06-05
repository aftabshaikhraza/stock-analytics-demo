from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fmp import get_company_profile, get_stock_price, get_income_statement, get_price_history


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/company/{ticker}")
def company_data(ticker: str):
    profile = get_company_profile(ticker)
    quote = get_stock_price(ticker)
    income = get_income_statement(ticker)
    history = get_price_history(ticker)
    return {
        "profile": profile,
        "quote": quote,
        "income_statement": income,
        "price_history": history
    }