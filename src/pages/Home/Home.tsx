import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default Home;