const express = require('express');
const app = express();

const PORT = process.env.PORT || 4200;

app.get('/', (req, res, next) => {
    res.send({
        info: "Please enter '/whoami' in the URL bar"
    })
});

const whoamiRouter = require('./routes/whoami.js');
app.use('/whoami', whoamiRouter);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));