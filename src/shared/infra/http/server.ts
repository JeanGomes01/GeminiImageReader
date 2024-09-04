import "dotenv/config";
import express from "express";
import "reflect-metadata";
import { routes } from "./routes/routes";

const server = express();
const port = 3000;

server.use(express.json());
server.use(routes);

server.listen(port, () => {
  console.log("Listening on port 3000");
});
