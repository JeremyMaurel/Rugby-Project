import express from "express";
import { sayGoodbye, sayHello } from "./controllers/test.js";

const router = express.Router();
router.get("/", sayHello);
router.get("/bye", sayGoodbye);

export default router;
