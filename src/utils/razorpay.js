export const openRazorpayCheckout = (amount, userName, userEmail) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: amount * 100, // in paise
      currency: "INR",
      name: "Oakspace Furniture",
      description: "Order Payment",
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        // You can store payment info to Firestore here
      },
      prefill: {
        name: userName,
        email: userEmail,
      },
      theme: {
        color: "#a67c52",
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  