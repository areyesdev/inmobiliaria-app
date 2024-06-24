import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello World Route");
});

router.post("/test", (req, res) => {
  res.send("Hello World Route");
});

router.put("/test", (req, res) => {
  res.send("Hello World Route");
});

router.delete("/test", (req, res) => {
  res.send("Hello World Route");
});

export default router;
