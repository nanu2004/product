// ProductCard.jsx
import React from 'react';
import { useProductContext } from './ProductContext';

const ProductCard = () => {
  const { productData } = useProductContext();

  return (
    <div className="flex flex-wrap">
      {productData.map((product) => (
        <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white p-6 my-4 rounded-lg shadow-md">
            {/* Ensure the key is unique for each product */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto rounded-md mb-2"
            />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-500 mt-2">Price: ${product.price}</p>
            <p className="text-gray-500">Category: {product.category}</p>
            <p className="text-gray-500">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
