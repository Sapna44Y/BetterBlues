export default function DonationButton() {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_2eyDsrT3RRQSLQ",
      amount: "50000",
      currency: "INR",
      name: "BetterBlues Donation",
      description: "Donation for a cause",
      image: "https://example.com/your_logo.jpg",
      handler: function (response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "Donor Name",
        email: "donor@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#2563eb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button
      onClick={displayRazorpay}
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
    >
      Donate Now
    </button>
  );
}
