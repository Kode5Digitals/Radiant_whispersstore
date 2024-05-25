const SECRET_KEY = "sk_test_49141c222ff880892dd5b51feb1c185e8e9a5b61";
const axios = require('axios');

const createPayment=async(req, res) =>{ 
const {amount,email}=req.body
console.log(req.body)
try {
    const response = await axios.post('https://api.paystack.co/transaction/initialize', {
        amount: amount * 100,
        email: email,
    }, {
        headers: {
            Authorization: `Bearer ${SECRET_KEY}`,
            'Content-Type': 'application/json',
        },
    });

    const { authorization_url } = response.data.data;
    res.status(200).json({ authorization_url });
} catch (error) {
    console.error('Error creating payment:',error);
    res.status(500).json({ error: 'Error creating payment' });
}
  
  }



  const verifyPayment = async (reference)=> {
    try {
      const payment = await paystack.transaction.verify(reference);
      return payment.data;
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  };

  module.exports ={
    createPayment,
    verifyPayment}
  