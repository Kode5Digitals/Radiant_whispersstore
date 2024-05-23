const   PAYSTACK_PUBLIC_KEY = require("../config/env");
const fetch = require('node-fetch');


const PaystackHandler=async(req, res) =>{ 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
    console.log(req.body)
    if (!PAYSTACK_SECRET_KEY) {
        return res.status(500).json({ error: 'Paystack secret key is not configured' });
      }
      const { amount, email } = req.body;
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PAYSTACK_PUBLIC_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: amount * 100, 
        email: email,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
        return res.status(response.status).json({ error: data.message });
      }
    
    res.status(200).json(data);
  }
  module.exports = PaystackHandler