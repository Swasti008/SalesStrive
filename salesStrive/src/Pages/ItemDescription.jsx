import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { format, parseISO } from "date-fns";
import NavBar from "../components/NavBar";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DescriptionPage = () => {
  const { id } = useParams();
  const item = useSelector((state) =>
    state.sales.items.find((item) => item.id === parseInt(id))
  );

  if (!item) {
    return <p>Item not found</p>;
  }

  const purchaseDate = parseISO(item.purchaseDate);
  const relativeDate = format(purchaseDate, "dd MMMM yyyy");

  return (
    <>
      <NavBar state={false} />
      <Button
        onClick={() => window.history.back()}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded ml-9"
      >
        &larr; Back
      </Button>
      <div className="flex flex-col items-center justify-center">
        <Card className="bg-white w-full max-w-6xl shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6 mt-4">
          <div className="flex-1">
            <img
              src={`https://via.placeholder.com/300?text=${item.brand}`}
              alt="Product Image"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="flex-1 p-4">
            <CardHeader>
              <CardTitle>Reward Information</CardTitle>
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold">{item.brand} Product</h1>
                <p className=" text-lg mb-4 md:text-xl">
                  Purchased {relativeDate} on{" "}
                  {format(purchaseDate, "dd MMMM yyyy")}
                </p>
                <p className=" text-lg mb-4 md:text-xl">
                  <strong>Amount:</strong> Rs {item.totalSales}
                </p>
                <p className=" text-lg mb-4 md:text-xl">
                  <strong>Reward Points earned:</strong> {item.rewardPoints}
                </p>
                <p className=" text-lg mb-4 md:text-xl">
                  <strong>Commission: </strong>
                  {((item.rewardPoints / item.totalSales) * 100).toFixed(2)} %
                </p>
              </div>
            </CardHeader>
            <CardFooter>
              <p>*Assuming 1 point = Rs 1</p>
            </CardFooter>
          </div>
        </Card>
      </div>
    </>
  );
};

export default DescriptionPage;
