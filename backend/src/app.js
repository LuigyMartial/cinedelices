import express from 'express';
import "dotenv/config.js";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

export default app;