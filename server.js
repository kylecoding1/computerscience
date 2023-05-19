const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;
const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require('./routes/api/thought-routes');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/computer", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// It seems you are missing the leading '/' in your routes.
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
