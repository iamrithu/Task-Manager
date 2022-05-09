require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const tasks = require("./routes/task");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware...

app.use(express.static("./public"));
app.use(express.json());

//routing...

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

//listening...

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is  listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
