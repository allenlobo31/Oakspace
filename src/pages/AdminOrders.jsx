import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrders, updateOrderStatus } from '../firebase/db';
import { useApp } from '../context/AppContext';

const AdminOrders = () => {
  const navigate = useNavigate();
  const { isAdmin, isLoggedIn } = useApp();
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');
  const [loading, setLoading] = useState(true);

  // Redirect if not admin
  useEffect(() => {
    if (!isLoggedIn || !isAdmin) {
      navigate('/');
    }
  }, [isLoggedIn, isAdmin, navigate]);

  // Fetch orders
  useEffect(() => {
    const unsubscribe = getOrders((fetchedOrders) => {
      setOrders(fetchedOrders);
      setFilteredOrders(fetchedOrders);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Filter orders by status
  useEffect(() => {
    if (filterStatus === 'All') {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(orders.filter(order => order.orderStatus === filterStatus.toLowerCase()));
    }
  }, [filterStatus, orders]);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      alert('Order status updated successfully!');
    } catch (error) {
      alert('Failed to update order status');
      console.error(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
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
          <p className="mt-4 text-gray-600">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Orders Management</h1>
          <p className="text-gray-600">Manage and track all customer orders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm mb-1">Total Orders</p>
            <p className="text-3xl font-bold text-gray-800">{orders.length}</p>
          </div>
          <div className="bg-yellow-50 rounded-lg shadow p-6">
            <p className="text-yellow-800 text-sm mb-1">Pending</p>
            <p className="text-3xl font-bold text-yellow-800">
              {orders.filter(o => o.orderStatus === 'pending').length}
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg shadow p-6">
            <p className="text-blue-800 text-sm mb-1">Processing</p>
            <p className="text-3xl font-bold text-blue-800">
              {orders.filter(o => o.orderStatus === 'processing').length}
            </p>
          </div>
          <div className="bg-green-50 rounded-lg shadow p-6">
            <p className="text-green-800 text-sm mb-1">Delivered</p>
            <p className="text-3xl font-bold text-green-800">
              {orders.filter(o => o.orderStatus === 'delivered').length}
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-lg shadow mb-6 p-4">
          <div className="flex flex-wrap gap-2">
            {['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filterStatus === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {filteredOrders.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <p className="text-xl mb-2">No orders found</p>
              <p>Orders matching the selected filter will appear here</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Order ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Items</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Total</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm text-blue-600">
                          {order.orderId?.substring(0, 20)}...
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-gray-800">{order.userName}</p>
                          <p className="text-sm text-gray-600">{order.userEmail}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatDate(order.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {order.items?.length || 0} items
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-green-600">
                          ${order.totalAmount?.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.orderStatus)}`}>
                          {order.orderStatus?.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => navigate(`/admin/orders/${order.orderId}`)}
                            className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                          >
                            View
                          </button>
                          <select
                            value={order.orderStatus}
                            onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                            className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 outline-none"
                          >
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;