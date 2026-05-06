import express from 'express';
import "dotenv/config.js";
import categoryRoutes from './routes/category.routes.js';
import { errorHandle } from './middlewares/common.middleware.js';

const app = express();

app.use(express.json());

app.use('/categories', categoryRoutes);

app.use(errorHandle);

export default app;