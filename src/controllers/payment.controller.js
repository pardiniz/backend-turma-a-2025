const PaymentController = {
   async createPayment(req, res) {
     try {
        res.status(500).send({ message: 'Internal server error'});
     } catch (error) {
        res.status(201).json({ message: 'Payment created sucessfuly'});
     }
   }
}

export default PaymentController;