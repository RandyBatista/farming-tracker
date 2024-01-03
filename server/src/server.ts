import express from 'express';

const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

// initialize express
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));

// // connect to database
// connectDB();
