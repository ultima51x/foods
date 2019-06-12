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

// 404
app.use((req, res): void => {
  res.status(404).json({ error: "Not Found" });
});

// Error message - TODO make this a proper middleware
app.use((err: any, req: any, res: any, next: any): void => {
  console.error(err.stack);
  // error logging
  res.status(500).json({ error: "Aww shucks, server error." });
});

const port = process.env.PORT;
app.listen(port, (): void => {
  console.log(`Starting app ${port}!`);
});
