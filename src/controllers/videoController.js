import Video from "../models/video";

export const home = (req, res) => {
    Video.find({}).then((videos) => {
        console.log("videos", videos);
        return res.render("home", { pageTitle: "Home", videos });
    }).catch((error) => {
        console.log("errors", error);
    });
}

export const watch = (req, res) => {
    const { id } = req.params;
    return res.render("watch", { pageTitle: `Watch` });
};

export const getEdit = (req, res) => {
    console.log(req.params)
    const { id } = req.params;
    return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => res.send("search");

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
}

export const postUpload = (req, res) => {
    return res.redirect("/");
}
