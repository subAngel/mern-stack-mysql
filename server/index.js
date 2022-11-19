import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// * Settings

app.use(indexRoutes);

app.listen(PORT);
console.log(`Server running on http://localhost:${PORT}}`);
