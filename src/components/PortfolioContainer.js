import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onAddStock}) {
  const stockList =  stocks.map(stock => (
    <Stock key={stock.id} stock={stock} onStockClick={onAddStock} />
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {stockList}
    </div>
  );
}

export default PortfolioContainer;
