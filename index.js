require("dotenv").config();
const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(serveStatic(path.join(__dirname, "/public"), { extensions: ["html"] }));

const commonRoutes = require("./api/routes/commonRoutes");
app.use("/api", commonRoutes);

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(port);
