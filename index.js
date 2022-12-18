const compression = require('compression');
const express = require('express');
const fs = require('fs/promises');

const port = 3000;
const app = express();

// Uncomment the following line if you want to use the compression without nginx
// app.use(compression()); 

app.use(express.static('assets'));

app.get('/', async (req, res) => {
    const page = await fs.readFile('./pages/index.html', { encoding: 'utf8' });

    res.send(page);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
