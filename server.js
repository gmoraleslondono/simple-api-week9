import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/greet", (req, res) => {
  res.send("Hello, developer!");
});

app.post("/submit", (req, res) => {
  const newData = req.body;
  console.log(newData);
  res.json({
    message: `Hello, ${newData.name}! You are ${newData.age} years old.`,
    use: newData,
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
