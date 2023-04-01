import { Router } from 'express';
import { getPopularMovies } from '../controllers/movie';

const router = Router();

router.get('/popular', getPopularMovies)

export default router;