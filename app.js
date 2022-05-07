const express = require("express");

const app = express();

const port = 3000;

const tasks = require("./routes/task");

//middleware

app.use(express.json());

//routing

app.use("/api/v1/tasks", tasks);

//listening

app.listen(port, console.log(`app listening on port ${port}`));
