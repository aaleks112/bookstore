const express = require("express");

const { userRouter, authRouter, libraryRouter, bookRouter } = require("./src/routes");
const { initializeDB } = require("./src/config/db-config");

const PORT = 8090;


const app = express();

// Application Middlewares
app.use(express.json());


//Application Routes
app.use("/user", userRouter);
app.use("/user/:userId", userRouter);
app.use("/login", authRouter);

app.use("/library", libraryRouter);

app.use("/book", bookRouter);





app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in port:${PORT}`);
});
