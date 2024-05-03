const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./config/database.config"); 
const cityRoutes = require('./routes/cityRoutes');
const authRoutes = require('./routes/authRoutes');
const portalAccountRoutes = require('./routes/portalaccountRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(db.url)
.then(() => {
    console.log("Successfully connected to the database");
})
.catch(err => {
    console.log('Could not is connect to the database. Exiting now...', err);
    process.exit();
});

// Define routeslo  
app.get("/", (req, res) => {
  res.send("Welcome to master data Lovvit App");
});

// Integrate CRUD routes

app.use('/api', cityRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/portalaccount', portalAccountRoutes);

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
