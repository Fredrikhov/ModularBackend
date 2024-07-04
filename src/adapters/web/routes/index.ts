import express from "express";
import { withHttpMiddleware } from "../middlewares/withHttpMiddleware";
import {
  deleteController,
  getController,
  postController,
  putController,
} from "../controllers";

export const router = express.Router();

router.get("/", withHttpMiddleware(getController));
router.post("/", withHttpMiddleware(postController));
router.put("/", withHttpMiddleware(putController));
router.delete("/", withHttpMiddleware(deleteController));
