import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./routes/index";

const app = express();

// http request logging
app.use(morgan("combined"));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// the app is here
app.use("/", router);

const port = process.env.PORT;
app.listen(port, (): void => {
  console.log(`Starting app ${port}!`);
});
