const express = require("express");

const { userRouter, authRouter } = require("./src/routes");
const { initializeDB } = require("./src/config/db-config");

const PORT = 8091;


const app = express();

// Application Middlewares
app.use(express.json());


//Application Routes
app.use("/user", userRouter);
app.use("/user/:userId", userRouter);
app.use("/login", authRouter);






app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in port:${PORT}`);
});
