const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/self-introduction', (req, res) => {
    res.render('self-introduction');
});

app.get('/work-resume', (req, res) => {
    res.render('work-resume');
});

// If you want to add a new route for /resume-builder
app.get('/resume-builder', (req, res) => {
    res.render('resume-builder'); // Ensure you have a corresponding EJS file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
