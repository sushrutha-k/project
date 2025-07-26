const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');      // ✅ Session for OAuth
const passport = require('passport');            // ✅ Passport for OAuth

dotenv.config();
const app = express();

// ✅ Passport config file
require('./passportConfig');

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public')); // Serve frontend HTML files

// ✅ Express session (for Google/Facebook login)
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));

// ✅ Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// ✅ API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/donations', require('./routes/donationRoutes'));
app.use('/api/confirmed', require('./routes/confirmedRoutes'));

// ✅ Google OAuth
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login.html' }),
  (req, res) => {
    // Save user info in session or redirect to frontend with token
    res.redirect('/index.html'); // Redirect to homepage after login
  }
);

// ✅ Facebook OAuth
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login.html' }),
  (req, res) => {
    res.redirect('/index.html');
  }
);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
