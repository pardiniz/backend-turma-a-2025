import { Router } from 'express';

const router = Router();

router.get('/payments', (req, res) => {
    res.send('Payments route');
});

export default router;