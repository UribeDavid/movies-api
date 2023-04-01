import express from 'express';
import { errorHandler } from './helpers/errorHandler';
import moviesRoutes from './routes/movie';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/api/movies', moviesRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`);
});