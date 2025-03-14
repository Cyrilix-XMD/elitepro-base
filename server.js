const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const errors = [];

app.use(express.json());
app.set('view engine', 'ejs');

// Endpoint to receive errors
app.post('/api/errors', (req, res) => {
    const { error, timestamp } = req.body;
    errors.push({ error, timestamp });
    console.log("Error received:", error);
    res.status(200).send("Error logged");
});

// Serve the dashboard
app.get('/', (req, res) => {
    res.render('index', { errors });
});

app.listen(port, () => {
    console.log(`Monitoring server running on http://localhost:${port}`);
});
