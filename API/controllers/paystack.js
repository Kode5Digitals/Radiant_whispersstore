const paystack = require('paystack')("pk_test_07070da6a9afaa698f923376dc24bbbe12df1d94");

const createPayment=async(req, res) =>{ 
const {amount,email}=req.body

  try {
    if (!PAYSTACK_SECRET_KEY) {
      return res.status(500).json({ error: 'Paystack secret key is not configured' });
    }
    const payment = await paystack.transaction.initialize({
      amount: amount * 100,
      email: email,
    });
    return payment.data;
  } catch (error) {
    console.error('Error creating payment:', error);
    throw error;
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
  