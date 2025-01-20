import express from "express";
import morgan from "morgan";

const PORT = 4001;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res) =>
    res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleUserEditor = (req, res) => res.send("Edit user");

userRouter.get("/edit", handleUserEditor)

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("watch video");

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);






const handleListening = () => console.log(`server listening http://localhost:${PORT}`);


app.listen(PORT, handleListening);