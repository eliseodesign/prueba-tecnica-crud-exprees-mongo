import express from "express";
import morgan from "morgan";
import path from 'path';
const {engine} = require("express-handlebars");

const app = express();
app.set("views", path.join(__dirname, "views"));

app.engine(".hbs", engine({
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs"
}));

app.set("view engine", ".hbs");

app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));

export default app;