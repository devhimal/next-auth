"use client";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: VoidFunction }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="w-[90%] mx-auto">
      Error while fetching the data.
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
