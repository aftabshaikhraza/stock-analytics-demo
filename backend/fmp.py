import requests
import os

FMP_API_KEY = os.getenv("FMP_API_KEY")
BASE_URL = "https://financialmodelingprep.com/api/v3"

def get_company_profile(ticker: str):
    url = f"{BASE_URL}/profile/{ticker}?apikey={FMP_API_KEY}"
    return requests.get(url).json()

def get_stock_price(ticker: str):
    url = f"{BASE_URL}/quote/{ticker}?apikey={FMP_API_KEY}"
    return requests.get(url).json()

def get_income_statement(ticker: str):
    url = f"{BASE_URL}/income-statement/{ticker}?limit=1&apikey={FMP_API_KEY}"
    return requests.get(url).json()

def get_price_history(ticker: str):
    url = f"{BASE_URL}/historical-price-full/{ticker}?timeseries=7&apikey={FMP_API_KEY}"
    data = requests.get(url).json()
    return data.get("historical", [])