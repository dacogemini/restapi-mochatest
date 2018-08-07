import app from './config/express';

app.listen(3000, () => {
    console.log('API Server Started and Listening on Port 3000');
})

export default app;