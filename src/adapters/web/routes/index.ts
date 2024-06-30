import express from "express";
import { withHttpMiddleware } from "../middlewares";
import { getController, postController } from "../controllers";

const router = express.Router();

router.get("/", withHttpMiddleware(getController));
router.post("/", withHttpMiddleware(postController));

export { router };
