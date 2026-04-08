import React from "react";

const Features = () => {
  return (
    <div className="py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Features</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-5  bg-gray-100 shadow rounded">Fast</div>
        <div className="p-5 bg-gray-100 shadow rounded">Responsive</div>
        <div className="p-5 bg-gray-100 shadow rounded">Modern UI</div>
      </div>
    </div>
  );
};

export default Features;