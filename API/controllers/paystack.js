const SECRET_KEY = "sk_test_49141c222ff880892dd5b51feb1c185e8e9a5b61";
const axios = require('axios');

const createPayment=async(req, res) =>{ 
console.log("lkjhgfd")

const {amount,email, firstName, lastName }=req.body
console.log(req.body)
try {
    const response = await axios.post('https://api.paystack.co/transaction/initialize', {
        amount: amount * 100,
        email: email,
        metadata: {
          firstName,
          lastName,
        },
    }, {
        headers: {
            Authorization: `Bearer ${SECRET_KEY}`,
            'Content-Type': 'application/json',
        },
    });

    res.status(200).json(response.data);
} catch (error) {
    console.error('Error creating payment:',error);
    res.status(500).json({ error: 'Error creating payment' });
}
  
  }



const verifyPayment = async (req, res) => {
  console.log(req.params)
  try {
    const { reference } = req.params; 

    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization:`Bearer ${SECRET_KEY}`, 
        },
      }
    );
    const data = response.data;
    res.json({ data });
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};


  module.exports ={
    createPayment,
    verifyPayment}
  