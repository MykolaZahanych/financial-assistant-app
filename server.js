const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => res.json({ msg: 'Hello world!' }))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
