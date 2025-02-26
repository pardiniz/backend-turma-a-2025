import {z} from "zod"

const paymentSchema = z.object({
    nome: z.string().min(3, {message: "Precisa de no minimo 6"}).max(255),
   email: z.string().email({message: "Email Invalido"}),
   senha: z.string().min(6,{message: "Precisa de no minimo 6"}),
   observacao: z.string().max(255),
   data: z.date().optional(),
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
   }
}

export default PaymentController;