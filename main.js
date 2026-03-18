const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send("heyyy ! i am a container of node");
});

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
