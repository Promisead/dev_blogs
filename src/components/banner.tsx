import React from "react";

export default function Banner() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-6 text-center">
    <h3 className="text-lg font-semibold uppercase tracking-widest text-gray-600">
      Dev Champions Insights
    </h3>
    <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">
      Innovate. Build. Inspire.
    </h2>
    <p className="max-w-2xl text-lg text-gray-700">
      Explore expert insights, emerging tech trends, and groundbreaking innovations—crafted by our team to keep you ahead.
    </p>
  </div>
  
  );
}
