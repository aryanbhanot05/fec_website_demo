"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const DonatePage = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const router = useRouter();

  const handleDonation = (e) => {
    e.preventDefault();
    // In a real application, you would process the payment here.
    alert(`Thank you for your generous donation of $${amount}, ${name}! A confirmation has been sent to ${email}.`);
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Make a Donation</h2>
        <form onSubmit={handleDonation}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Donation Amount ($)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              type="number"
              placeholder="50"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="jane.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card-number">
              Card Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="card-number"
              type="text"
              placeholder="•••• •••• •••• ••••"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiry">
                Expiry Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expiry"
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvc">
                CVC
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cvc"
                type="text"
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Donate Now
            </button>
            <Link href="/" className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-800">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonatePage;