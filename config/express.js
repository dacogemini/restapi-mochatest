import express from 'express';

const app = express();

app.get('/', (req, res) => ('Hello, this is API and I\'m ok!'));

export default app;