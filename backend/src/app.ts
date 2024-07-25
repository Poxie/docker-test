import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(process.env.NEXT_PUBLIC_SECRET_VARIABLE);
})

export default router;