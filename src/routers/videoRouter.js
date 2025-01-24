import express from "express";
import { getEdit, watch, deleteVideo, upload, postEdit, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

// videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit", getEdit).get(getEdit).post(postEdit);
// videoRouter.get("/:id(\\d+)/delete", deleteVideo)
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;