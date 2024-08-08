const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// }).catch((err) => console.log(err));

// Default Route for Undefined Endpoints
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Connect to MongoDB
mongoose.set('strictQuery', true); // Avoid deprecation warnings
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit the process with failure
});