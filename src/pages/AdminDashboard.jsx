import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import AdminForm from '../Components/AdminForm';
import ProductCard from '../Components/ProductCard';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Dashboard as DashboardIcon,
  Inventory as InventoryIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const AdminDashboard = () => {
  const {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    user,
    isAdmin,
    userType,
    logout,
    cart,
    cartTotal,
    loading
  } = useApp();

  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [allUsers, setAllUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'users'));
        const usersList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllUsers(usersList);
      } catch (err) {
        console.error('Error fetching users:', err);
      } finally {
        setLoadingUsers(false);
      }
    };
    fetchUsers();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(productId);
        alert('Product deleted successfully!');
      } catch (error) {
        alert('Failed to delete product. Please try again.');
      }
    }
  };

  // ✅ Fixed: Properly handle async operations
  const handleFormSubmit = async (productData) => {
    try {
      if (editingProduct) {
        await updateProduct(productData);
        alert('Product updated successfully!');
      } else {
        await addProduct(productData);
        alert('Product added successfully!');
      }
      setShowForm(false);
      setEditingProduct(null);
    } catch (error) {
      console.error('Error saving product:', error);
      throw error; // Let AdminForm handle the error
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  // Overview stats
  const totalProducts = products.length;
  const inStockProducts = products.filter(p => p.inStock).length;
  const outOfStockProducts = totalProducts - inStockProducts;
  const averagePrice = products.reduce((sum, p) => sum + p.price, 0) / totalProducts || 0;

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your furniture inventory</p>
            {user && <p className="text-sm text-gray-500 mt-1">Welcome, {user.email}</p>}
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
          >
            <LogoutIcon />
            <span>Logout</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
              activeTab === 'overview' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <DashboardIcon className="text-sm" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
              activeTab === 'products' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <InventoryIcon className="text-sm" />
            <span>Products</span>
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="text-gray-600 mt-2">Loading...</p>
          </div>
        )}

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-3xl font-bold text-gray-800">{totalProducts}</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-sm font-medium text-gray-600">In Stock</p>
                <p className="text-3xl font-bold text-green-600">{inStockProducts}</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-sm font-medium text-gray-600">Out of Stock</p>
                <p className="text-3xl font-bold text-red-600">{outOfStockProducts}</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-sm font-medium text-gray-600">Avg. Price</p>
                <p className="text-3xl font-bold text-purple-600">${averagePrice.toFixed(0)}</p>
              </div>
            </div>

            {/* Users Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Registered Users</h3>
              {loadingUsers ? (
                <p className="text-gray-600">Loading users...</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-4 text-gray-600 font-semibold">Email</th>
                        <th className="text-left py-2 px-4 text-gray-600 font-semibold">Role</th>
                        <th className="text-left py-2 px-4 text-gray-600 font-semibold">Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allUsers.map((u) => (
                        <tr key={u.id} className="border-b hover:bg-gray-50">
                          <td className="py-2 px-4 text-gray-800">{u.email}</td>
                          <td className="py-2 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              u.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {u.role}
                            </span>
                          </td>
                          <td className="py-2 px-4 text-gray-800">{u.name || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Product Management</h2>
              <button
                onClick={handleAddProduct}
                disabled={loading}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <AddIcon />
                <span>Add New Product</span>
              </button>
            </div>

            {products.length === 0 && !loading && (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <p className="text-gray-500 text-lg">No products found. Add your first product!</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="relative group">
                  <ProductCard product={product} showAddToCart={false} />
                  <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleEditProduct(product)}
                      disabled={loading}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center disabled:opacity-50"
                    >
                      <EditIcon className="text-lg" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      disabled={loading}
                      className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center disabled:opacity-50"
                    >
                      <DeleteIcon className="text-lg" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showForm && (
          <AdminForm
            product={editingProduct}
            onClose={handleFormClose}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;