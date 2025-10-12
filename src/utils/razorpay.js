// src/utils/razorpay.js

/**
 * Load Razorpay script dynamically
 */
export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

/**
 * Initialize Razorpay payment
 * @param {Object} options - Payment options
 * @param {number} options.amount - Amount in rupees (will be converted to paise)
 * @param {string} options.orderId - Your order ID
 * @param {string} options.name - Customer name
 * @param {string} options.email - Customer email
 * @param {string} options.phone - Customer phone
 * @param {Function} options.onSuccess - Success callback
 * @param {Function} options.onFailure - Failure callback
 */
export const initializeRazorpay = async (options) => {
  const {
    amount,
    orderId,
    name,
    email,
    phone,
    onSuccess,
    onFailure
  } = options;

  // Load Razorpay script
  const scriptLoaded = await loadRazorpayScript();

  if (!scriptLoaded) {
    alert('Failed to load payment gateway. Please check your internet connection.');
    return;
  }

  // Razorpay options
  const razorpayOptions = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Your Razorpay Key ID
    amount: amount * 100, // Amount in paise (multiply by 100)
    currency: 'INR',
    name: 'OakSpace',
    description: `Order #${orderId}`,
    order_id: orderId, // This is optional, can be your custom order ID
    handler: function (response) {
      // Payment successful
      onSuccess({
        paymentId: response.razorpay_payment_id,
        orderId: response.razorpay_order_id || orderId,
        signature: response.razorpay_signature
      });
    },
    prefill: {
      name: name,
      email: email,
      contact: phone
    },
    notes: {
      order_id: orderId
    },
    theme: {
      color: '#2563eb' // Blue color matching your theme
    },
    modal: {
      ondismiss: function() {
        // Payment cancelled by user
        if (onFailure) {
          onFailure('Payment cancelled by user');
        }
      }
    }
  };

  // Create Razorpay instance
  const razorpayInstance = new window.Razorpay(razorpayOptions);

  // Handle payment failure
  razorpayInstance.on('payment.failed', function (response) {
    if (onFailure) {
      onFailure(response.error.description || 'Payment failed');
    }
  });

  // Open Razorpay checkout
  razorpayInstance.open();
};

/**
 * Format amount to Indian currency
 * @param {number} amount - Amount in rupees
 * @returns {string} Formatted amount
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }).format(amount);
};