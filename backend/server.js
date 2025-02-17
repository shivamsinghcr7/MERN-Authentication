import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT_ENV || 5000;

import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddlleware.js";
import connectDB from "./configs/db.js";
import cookieParser from "cookie-parser";

connectDB();

const app = express();

// allows to view body in JSON format
app.use(express.json());

// allows to send form data from url
app.use(express.urlencoded({ extended: true }));

//protecting routes via cookies
app.use(cookieParser());

app.use("/api/users/", userRoutes);

app.get("/", (req, res) => res.send("Server is ready."));

// custom made error handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT} .....`));
