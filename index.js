import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

    app.get('/', (req, res) => {
    res.send('Docker exercise is working fine!');
})

app.listen(PORT, () => {
    console.log(`Server is running on "http://localhost:${PORT}"`);
})
server.on('error', (err) => {
    console.error('Error starting the server:', err);
});
