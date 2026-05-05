import express from 'express';
import "dotenv/config.js";
import categoryRoutes from './routes/category.routes.js';

const app = express();

app.use(express.json());

app.use('/categories', categoryRoutes);

export default app;