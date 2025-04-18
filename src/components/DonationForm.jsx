import { useState } from "react";

export default function DonationForm() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("one-time");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ amount, name, email, paymentMethod });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Payment Type */}
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => setPaymentMethod("one-time")}
          className={`py-2 px-4 rounded-md transition ${
            paymentMethod === "one-time"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          One-time
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod("monthly")}
          className={`py-2 px-4 rounded-md transition ${
            paymentMethod === "monthly"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Monthly
        </button>
      </div>

      {/* Amount Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Amount (USD)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[25, 50, 100, 250].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setAmount(value.toString())}
              className={`py-2 rounded-md transition ${
                amount === value.toString()
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              ${value}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div>
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Or enter custom amount
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500">$</span>
          </div>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 py-3 border-gray-300 rounded-md"
            placeholder="0.00"
            min="1"
            required
          />
        </div>
      </div>

      {/* Personal Info */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
            required
          />
        </div>
      </div>

      {/* Payment Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
      >
        {paymentMethod === "monthly" ? "Start Monthly Donation" : "Donate Now"}
      </button>

      {/* Security Info */}
      <div className="text-center text-xs text-gray-500 mt-4">
        <p>Your donation is secure and encrypted</p>
        <div className="flex justify-center space-x-4 mt-2">
          <span className="text-green-600">✓ Tax Deductible</span>
          <span className="text-green-600">✓ SSL Secure</span>
        </div>
      </div>
    </form>
  );
}
