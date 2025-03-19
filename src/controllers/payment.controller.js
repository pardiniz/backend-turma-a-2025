import {z} from "zod"

const paymentSchema = z.object({
    data: z.string().datetime(),
    valor: z.number().positive(),
    numero: z.number().int().positive(),
   observacao: z.string().optional(),

});

const PaymentController = {
   async createPayment(req, res) {
     try {
      const {nome, email, senha, observacao, data} = req.body;
      PaymentSchema.parse({nome, email, senha, observacao, data});
      console.log({nome, email, senha, observacao, data});
        res.status(500).send({ message: 'Internal server error'});
     } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Erro validação",
         errors: error.errors.map(
            (err) => ({
               atributo: err.path[0],
               message: err.message,
        }))
         }); }
        res.status(201).json({ message: 'Payment created sucessfuly'});
     }
   },
   async updatePayment(req, res) {

      try { 


         const {id} = req.params;
         const {valor, numero, data, observacao} = req.body;
         PaymentSchema.parse({valor, numero, data, observacao});
         res.status(200).json({ message: 'Payment updated sucessfuly', 
                                          data: {id, valor, numero, data, observacao}});
         
      } catch (error) {

         if (error instanceof z.ZodError) {
             res.status(400).json({ message: "Erro validação",
              details: error.errors}); 
            
            
            
            }
         res.status(500).send({ message: 'Internal server error'});
      }

   }

}



export default PaymentController;