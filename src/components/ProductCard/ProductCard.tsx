import React from 'react';

const ProductCard: React.FC = () => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">Product Name</h2>
      <p>Product description goes here.</p>
      <button className="bg-blue-500 text-white p-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
