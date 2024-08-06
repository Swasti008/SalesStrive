import React from "react";
import { PropagateLoader } from "react-spinners";

export default function Loader({ message }) {
  return (
    <div className="flex h-screen justify-center items-center flex-col gap-4">
      <h1 className="text-xl text-white mb-4">{message}</h1>
      <PropagateLoader color="#53A4D9" />
    </div>
  );
}
