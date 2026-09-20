import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import cors from 'cors'
import router from './route/authRoute.js';
import connectDB from './config/db.js';

const app = express();

connectDB();

app.use(cors({
    origin: "https://abdullah-khan-dev.vercel.app",
    credentials: true
}));
app.use(express.json());

app.use("/api/auth", router);

app.get("/", (req, res) => {
    res.send("Portfolio Backend is running!")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})