import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOrderById, updateOrderStatus } from '../firebase/db';
import { useApp } from '../context/AppContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonIcon from '@mui/icons-material/Person';

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { isAdmin, isLoggedIn } = useApp();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn || !isAdmin) {
      navigate('/');
      return;
    }

    const fetchOrder = async () => {
      try {
        const orderData = await getOrderById(orderId);
        setOrder(orderData);
      } catch (error) {
        console.error('Error fetching order:', error);
        alert('Order not found');
        navigate('/admin/orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, isLoggedIn, isAdmin, navigate]);

  const handleStatusChange = async (newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrder({ ...order, orderStatus: newStatus });
      alert('Order status updated successfully!');
    } catch (error) {
      alert('Failed to update order status');
      console.error(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'processing': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'shipped': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'delivered': return 'bg-green-100 text-green-800 border-green-300';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Order not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/admin/orders')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowBackIcon />
          <span>Back to Orders</span>
        </button>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Details</h1>
              <p className="text-gray-600 font-mono text-sm">{order.orderId}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-4 py-2 rounded-lg border-2 font-semibold ${getStatusColor(order.orderStatus)}`}>
                {order.orderStatus?.toUpperCase()}
              </span>
              <select
                value={order.orderStatus}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Order Items & Payment */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Items */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Items</h2>
              <div className="space-y-4">
                {order.items?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 border-b pb-4 last:border-b-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <PaymentIcon className="text-green-600" />
                <h2 className="text-xl font-bold text-gray-800">Payment Information</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment ID:</span>
                  <span className="font-mono text-sm text-gray-800">{order.paymentId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Status:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    order.paymentStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {order.paymentStatus?.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="text-gray-800 font-semibold">Razorpay</span>
                </div>
                <div className="flex justify-between pt-3 border-t">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="text-2xl font-bold text-green-600">${order.totalAmount?.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Customer & Shipping */}
          <div className="space-y-6">
            {/* Customer Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <PersonIcon className="text-blue-600" />
                <h2 className="text-xl font-bold text-gray-800">Customer Info</h2>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold text-gray-800">{order.userName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-800">{order.userEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold text-gray-800">{order.userPhone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">User ID</p>
                  <p className="font-mono text-xs text-gray-600">{order.userId}</p>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <LocalShippingIcon className="text-purple-600" />
                <h2 className="text-xl font-bold text-gray-800">Shipping Address</h2>
              </div>
              <div className="text-gray-800">
                <p className="font-semibold">{order.address?.fullName}</p>
                <p className="text-sm mt-2">{order.address?.addressLine1}</p>
                {order.address?.addressLine2 && (
                  <p className="text-sm">{order.address?.addressLine2}</p>
                )}
                <p className="text-sm">
                  {order.address?.city}, {order.address?.state} {order.address?.pincode}
                </p>
                <p className="text-sm">{order.address?.country}</p>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-sm text-gray-600">Contact: {order.address?.phone}</p>
                  <p className="text-sm text-gray-600">Email: {order.address?.email}</p>
                </div>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Timeline</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Order Placed</p>
                  <p className="font-semibold text-gray-800">{formatDate(order.createdAt)}</p>
                </div>
                {order.updatedAt && (
                  <div>
                    <p className="text-sm text-gray-600">Last Updated</p>
                    <p className="font-semibold text-gray-800">{formatDate(order.updatedAt)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;