const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");


// Correct import for user routes
const userRoutes = require("./routes/user.routes");
const connectDB = require("../userinfo/DataBase/dbConnection");
const router = require("./routes/user.routes");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.send("Chowdeck server is running 🚀");
});

app.use("/create/createUser", router)


// Start server
const PORT = process.env.PORT || 9000;
connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
