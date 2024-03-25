import express from "express";
import router from "./app/router.js";
import "dotenv/config.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, console.log(`Server is running http://localhost:${PORT}`));
