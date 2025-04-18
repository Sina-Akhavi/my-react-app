import yfinance as yf
df = yf.download('BTC-USD')


print(df.head())
print(df.tail())

df.to_csv('/home/drsystem/Documents/skills/react/my-react-app/btc_data.csv', index=True)
