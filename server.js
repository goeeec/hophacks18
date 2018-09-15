const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/test', (req, res) => {
    res.setHeader('Content-Type', 'applicaiton/json')
    res.json({ express: "TESTING123" });
});