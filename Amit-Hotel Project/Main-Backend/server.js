const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const AddroomRoutes = require('./routes/AddroomRoutes');
const OwnerRoutes = require('./routes/Hotel-OwnerRoutes');
const UserRoutes = require('./routes/UserRoutes');
const AdminRoutes = require('./routes/AdminRoutes');
const BookRoomRoutes = require('./routes/BookRoomRoutes');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

//Test route 
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Routes
app.use('/api/Admin',AdminRoutes);
app.use('/api/rooms', AddroomRoutes);
app.use('/api/Owners', OwnerRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/bookroom',BookRoomRoutes);


// Start server
const PORT = process.env.PORT || 5200;

app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
