import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function userCard({ userData }) {
  if (!userData) {
    return null;
  }

  return (
    <Card className="bg-white md:w-fit ">
      <CardHeader>
        <CardTitle>User Details</CardTitle>
        <CardDescription>Welcome To Sales Strive!</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={userData.image}
          alt="profile image"
          className="w-24 shadow-glowGreen rounded-full"
        />
        <div>
          <h1 className="md:text-xl font-bold">{userData.name}</h1>
          <h2>{userData.designation}</h2>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
