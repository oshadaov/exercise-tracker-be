const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://oshadaET:mean123@exercisetrackerdb.yewxxkq.mongodb.net/?retryWrites=true&w=majority&appName=exerciseTrackerDB;"; // Replace with your connection details



mongoose.connect(mongoURI, {
  // Other connection options (e.g., useNewUrlParser, useUnifiedTopology)
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user')

app.use('/exercises',exerciseRouter);
app.use('/user',userRouter)

app.listen(port, ()=> {

    console.log(`Server is running on port: ${port}`);
});