import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addItem, removeItem } from '../../redux/slices/cartSlice';

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);

  const handleAddToCart = (product: {
    id: string;
    name: string;
    price: number;
  }) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">Product List</h2>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() =>
          handleAddToCart({ id: '1', name: 'Product 1', price: 100 })
        }
        type="button"
      >
        Add to Cart
      </button>
      <h3 className="text-xl font-bold">Cart Items: {cartItems.length}</h3>
      <ul className="list-disc">
        {cartItems.map(item => (
          <li
            key={`${item.id}-${item.name}`}
            className="text-lg font-bold my-2"
          >
            {item.name} - {item.quantity} pcs
            <button
              onClick={() => dispatch(removeItem(item.id))}
              type="button"
              className="bg-red-500 text-white p-2 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
