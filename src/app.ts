import "reflect-metadata";
import express, { Application } from "express";

const app: Application = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("tudo bem");
});

export default app