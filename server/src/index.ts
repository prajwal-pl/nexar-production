import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";

import projectRoute from "./routes/projectRoute";
import taskRoute from "./routes/taskRoute";
import searchRoute from "./routes/searchRoute";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/projects", projectRoute);
app.use("/tasks", taskRoute);
app.use("/search", searchRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
