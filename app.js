const express = require("express");
const { get } = require("http");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello ne");
});

app.listen(3000, () => {
	console.log("Runnig port 3000");
});
