import express from "express";
import morgan from "morgan";
import router from "./routes/index";

const app = express();
const port = 3000;

// http request logging
app.use(morgan("combined"));

app.use("/", router);

app.listen(port, (): void => {
  console.log(`Starting foods ${port}!`);
});
