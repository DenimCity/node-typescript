import express from 'express';
import getRockets from '../controller/userController';

const router = express.Router();

router.get('/users', (getRockets as any ))

export default router;