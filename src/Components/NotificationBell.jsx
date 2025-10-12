//Notification page

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { getNotifications, getUnreadNotificationsCount, markNotificationAsRead, markAllNotificationsAsRead } from '../firebase/db';

const NotificationBell = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Listen to notifications
    const unsubscribeNotifications = getNotifications((notifs) => {
      setNotifications(notifs.slice(0, 10)); // Show only last 10
    });

    // Listen to unread count
    const unsubscribeCount = getUnreadNotificationsCount((count) => {
      setUnreadCount(count);
    });

    return () => {
      unsubscribeNotifications();
      unsubscribeCount();
    };
  }, []);

  const handleNotificationClick = async (notification) => {
    // Mark as read
    if (!notification.isRead) {
      await markNotificationAsRead(notification.id);
    }

    // Navigate to order details
    navigate(`/admin/orders/${notification.orderId}`);
    setShowDropdown(false);
  };

  const handleMarkAllAsRead = async () => {
    await markAllNotificationsAsRead();
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // difference in seconds

    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
    
    return date.toLocaleDateString();
  };

  return (
    <div className="relative">
      {/* Bell Icon */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <NotificationsIcon style={{ fontSize: '28px' }} />
        
        {/* Badge */}
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowDropdown(false)}
          ></div>

          {/* Dropdown Panel */}
          <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-2xl z-20 max-h-[500px] overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <h3 className="font-semibold text-lg">Notifications</h3>
              {unreadCount > 0 && (
                <button
                  onClick={handleMarkAllAsRead}
                  className="text-sm bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded-full transition-colors"
                >
                  Mark all read
                </button>
              )}
            </div>

            {/* Notifications List */}
            <div className="overflow-y-auto max-h-[400px]">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <NotificationsIcon style={{ fontSize: '48px' }} className="text-gray-300 mb-2" />
                  <p>No notifications yet</p>
                </div>
              ) : (
                <div className="divide-y">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification)}
                      className={`p-4 cursor-pointer transition-colors ${
                        notification.isRead
                          ? 'bg-white hover:bg-gray-50'
                          : 'bg-blue-50 hover:bg-blue-100'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          notification.isRead ? 'bg-gray-200' : 'bg-blue-500'
                        }`}>
                          <ShoppingCartIcon className={notification.isRead ? 'text-gray-600' : 'text-white'} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm ${notification.isRead ? 'text-gray-700' : 'text-gray-900 font-semibold'}`}>
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Order #{notification.orderId.substring(0, 15)}...
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-500">{formatTime(notification.timestamp)}</span>
                            <span className="text-sm font-semibold text-green-600">
                              ${notification.orderAmount?.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/* Unread Indicator */}
                        {!notification.isRead && (
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="bg-gray-50 p-3 text-center border-t">
                <button
                  onClick={() => {
                    navigate('/admin/orders');
                    setShowDropdown(false);
                  }}
                  className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                >
                  View All Orders →
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

// Shopping Cart Icon Component (simple replacement if not using MUI)
const ShoppingCartIcon = ({ className }) => (
  <svg className={`w-5 h-5 ${className}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  </svg>
);

export default NotificationBell;