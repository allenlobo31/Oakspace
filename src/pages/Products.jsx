import React from 'react';
import { useApp } from '../context/AppContext';
import ProductList from '../Components/ProductList';

const Products = () => {
  const { filteredProducts } = useApp();

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Furniture Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our extensive range of premium furniture pieces designed to transform your living spaces.
          </p>
        </div>
        
        <ProductList products={filteredProducts} showFilters={true} />
      </div>
    </div>
  );
};

export default Products;
