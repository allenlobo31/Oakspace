import React from 'react';
import { useApp } from '../context/AppContext';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = ({ item }) => {
  const { updateCartQuantity, removeFromCart } = useApp();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.id);
    } else {
      updateCartQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 mb-1">
          {item.category}
        </p>
        <p className="text-lg font-bold text-blue-600">
          ${item.price}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="p-3 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
          >
            <RemoveIcon className="text-gray-600 text-lg" />
          </button>
          
          <span className="px-6 py-3 text-center min-w-[60px] font-semibold flex items-center justify-center">
            {item.quantity}
          </span>
          
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="p-3 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
          >
            <AddIcon className="text-gray-600 text-lg" />
          </button>
        </div>

        {/* Subtotal */}
        <div className="text-right min-w-[80px]">
          <p className="text-lg font-bold text-gray-800">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        {/* Remove Button */}
        <button
          onClick={handleRemove}
          className="p-3 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200 flex items-center justify-center"
          title="Remove from cart"
        >
          <DeleteOutlineIcon className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
