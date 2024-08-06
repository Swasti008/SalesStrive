import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TotalInfoCard({ totalSales, totalRewards }) {
  return (
    <Card className="bg-white md:w-fit  flex flex-col justify-center">
      <CardContent>
        <div className="flex flex-col p-2">
          <h1 className="text-2xl font-bold text-slate-500 mb-2">TOTAL</h1>
          <h1 className="text-2xl font-bold text-cyan-800">Sales:</h1>
          <p className="text-lg text-slate-700">Rs. {totalSales}</p>
          <h1 className="text-2xl font-bold text-cyan-800 mt-4">
            RewardPoints:
          </h1>
          <p className="text-lg text-slate-700"> {totalRewards}</p>
        </div>
      </CardContent>
    </Card>
  );
}
