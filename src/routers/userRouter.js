import express from "express";

const userRouter = express.Router();

const handleUserEditor = (req, res) => res.send("Edit user");

userRouter.get("/edit", handleUserEditor)

export default userRouter;