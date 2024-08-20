import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductList from '../ProductList/ProductList';

const Home: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
