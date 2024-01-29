import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

// Example MongoDB connection string
const mongoURI = process.env.MONGO_URL;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });


const passwordSchema = new mongoose.Schema({
    value: String
})

const Password = mongoose.model('Password', passwordSchema)

app.get('/', (req, res) => res.send('Server is ready'))

app.post('/api/passwords', async (req, res) => {
    try {
        const { value } = req.body
        const password = new Password({ value })
        await password.save()
        res.status(201).json(password)
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.get('/api/passwords', async (req, res) => {
    try {
        const passwords = await Password.find();
        res.status(200).json(passwords);
    } catch (error) {
        console.error('Error fetching passwords:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server in running on port ${port}`)
})