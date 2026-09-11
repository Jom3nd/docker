import express from 'express';



const app = express();
const PORT = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.send('Docker exercise is working fine!');
})

app.listen(port, () => {
    console.log(`Server is running on "http://localhost:${PORT}"`);
})