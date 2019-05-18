import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => res.json({ message: "Hello World!" }));

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`));
