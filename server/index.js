import express from "express";
import { PORT } from "./config.js";
import cors from "cors";

import indexRoutes from "./routes/index.routes.js";
import taskroutes from "./routes/tasks.routes.js";

const app = express();

// * middlewares
app.use(express.json());
app.use(cors());

// * routes
app.use(indexRoutes);
app.use(taskroutes);

app.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);
