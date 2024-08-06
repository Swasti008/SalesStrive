import React from "react";
import { Link } from "react-router-dom";
const SalesCard = ({ sale }) => {
  return (
    <>
      <Link to={`/item/${sale.id}`}>
        <div className="card border p-4 rounded shadow-md bg-white text-black">
          <h2 className="font-bold text-lg">{sale.brand}</h2>
          <p>Purchase Date: {sale.purchaseDate}</p>
          <p>Sale Amount: Rs. {sale.totalSales}</p>
          <p>Reward Points: {sale.rewardPoints}</p>
        </div>
      </Link>
    </>
  );
};

export default SalesCard;
