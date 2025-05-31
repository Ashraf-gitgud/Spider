const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', require('./routes/public'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/games', require('./routes/games'));
app.use('/api/applications', require('./routes/applications'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
