const express = require("express");
const cors = requirs("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../index.html"));
});

const port = process.env.PORT || 4005; //defaults as backup to PORT 4005 to run locally when using nodemon

app.listen(port, () => {
    console.log(`We vibin on port ${port}`);
});
