import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server Running')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})