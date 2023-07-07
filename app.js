const express = require("express");

const { userRouter} = require("./src/routes");
const { initializeDB } = require("./src/config/db-config");

const PORT = 8090;


const app = express();

// Application Middlewares
app.use(express.json());


//Application Routes
app.use("/user", userRouter);





app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in ${PORT}`);
});
