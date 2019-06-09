import express from 'express';
import recipes from './recipes';

const router = express.Router();

router.use('/recipes', recipes);

router.get('/', (req, res): void => {
  res.send('This is the root!');
});

export default router;
