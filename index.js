const cors = require('cors')
const express = require("express");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, async () => {
    console.log(`Idearoom proxy listening at http://localhost:3000`);
});