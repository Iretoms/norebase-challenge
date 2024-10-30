import React from 'react'
import { CoinTickers } from '@/services/tickers/types';

type Prop = {
    data: CoinTickers[];
}

const Table = ({data}: Prop) => {
  return (
    <>
      <div className="flex flex-col md:hidden">
        {data.map((coinTicker, idx) => {
          const { id, name, symbol, price_usd, tsupply } = coinTicker;
          return (
            <div
              key={id}
              className={`p-2 ${idx % 2 === 0 ? "bg-gray-300" : "bg-white"}`}
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="text-left font-medium text-sm">
                  💰 Coin: {name}
                </div>
                <div className="text-left font-medium text-sm">
                  📄 Code: {symbol}
                </div>
                <div className="text-left font-medium text-sm">
                  🤑 Price: {price_usd}
                </div>
                <div className="text-left font-medium text-sm">
                  📈 Total Supply: {tsupply}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <table className="hidden md:table w-full">
        <thead>
          <tr>
            <th className="text-left p-2">💰 Coin</th>
            <th className="text-left">📄 Code</th>
            <th className="text-left">🤑 Price</th>
            <th className="text-left">📈 Total Supply</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coinTicker, index) => {
            const { id, name, symbol, price_usd, tsupply } = coinTicker;
            return (
              <tr
                key={id}
                className={index % 2 === 0 ? "bg-gray-300" : "bg-white"}
              >
                <td className="text-left font-medium p-2">{name}</td>
                <td className="text-left font-medium p-2">{symbol}</td>
                <td className="text-left font-medium p-2">{price_usd}</td>
                <td className="text-left font-medium p-2">{tsupply}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table