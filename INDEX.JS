
function signup() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const otp = document.getElementById('otp').value;
    
    // Perform client-side validation here
    
    // Send the data to the server for processing
    fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ email, phone, otp }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        // Handle the server response (e.g., success or error message)
    });
}
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect('mongodb://localhost/photography-website');
const User = mongoose.model('User', {
    email: String,
    phone: String,
    otp: String,
});

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    const { email, phone, otp } = req.body;

    // Perform server-side validation and OTP verification here

    // Save user data to the database
    const newUser = new User({ email, phone, otp });
    newUser.save()
        .then(() => res.json({ message: 'Signup successful' }))
        .catch(error => res.json({ error: 'An error occurred' }));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
