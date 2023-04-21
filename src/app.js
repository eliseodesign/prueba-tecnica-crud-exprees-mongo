import express from "express";
import morgan from "morgan";
import path from 'path';

const {engine} = require("express-handlebars");
import indexRoutes from "./routes/index.routes"


const app = express();
app.set("views", path.join(__dirname, "views"));

app.engine(".hbs", engine({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir:path.join(app.get("views"), "components"),
  defaultLayout: "main",
  extname: ".hbs"
}));

app.set("view engine", ".hbs");

// app.use(morgan("dev"));
// app.use(express.urlencoded({extended:false}));

app.use(indexRoutes)

export default app;