import express from "express";
import path from "path";
import { registerProfileRoute } from "./routes/profile.route.js";
const app = express();
const port = 3342;

const router = express.Router();
registerProfileRoute(router);

app.use("/api", router);

app.use(express.static(path.join(process.cwd(), "dist"), {}));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
