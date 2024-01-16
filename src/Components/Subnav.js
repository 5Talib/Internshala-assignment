import React from "react";

export default function Subnav() {
  return (
    <div className="flex space-x-10 items-center justify-center mt-14 mb-8">
      <div className="text-blue-900 text-xl font-bold border-b-2 border-blue-900">Study</div>
      <div className="text-gray-600 text-xl font-medium">Quiz</div>
      <div className="text-gray-600 text-xl font-medium">Test</div>
      <div className="text-gray-600 text-xl font-medium">Game</div>
      <div className="text-gray-600 text-xl font-medium">Others</div>
    </div>
  );
}
