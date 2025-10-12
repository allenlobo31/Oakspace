// src/utils/razorpay.js

export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

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

  const scriptLoaded = await loadRazorpayScript();

  if (!scriptLoaded) {
    alert('Failed to load payment gateway. Please check your internet connection.');
    return;
  }

  const razorpayOptions = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: amount * 100,
    currency: 'INR',
    name: 'OakSpace',
    description: `Order #${orderId}`,
    order_id: orderId,
    handler: function (response) {
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
      color: '#2563eb'
    },
    modal: {
      ondismiss: function() {
        if (onFailure) {
          onFailure('Payment cancelled by user');
        }
      }
    }
  };

  const razorpayInstance = new window.Razorpay(razorpayOptions);

  razorpayInstance.on('payment.failed', function (response) {
    if (onFailure) {
      onFailure(response.error.description || 'Payment failed');
    }
  });

  razorpayInstance.open();
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }).format(amount);
};