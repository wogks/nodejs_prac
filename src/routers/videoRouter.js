import express from "express";
import { getEdit, watch, deleteVideo, upload, postEdit, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

// videoRouter.get("/upload", upload);
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit", getEdit).get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
// videoRouter.get("/:id(\\d+)/delete", deleteVideo)

export default videoRouter;