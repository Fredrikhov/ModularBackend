import express from "express";
import dotenv from "dotenv";
import { router } from "../../adapters/web/routes";

dotenv.config();
const app = express();
const port = process.env.PORT || "3000";

app.use(express.json());
app.use(router);

app.listen(process.env.PORT);
console.log(`App running at localhost:${port}`);
