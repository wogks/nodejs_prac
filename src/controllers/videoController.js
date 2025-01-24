const fakeUser = {
    username: "nic",
    loggedIn: false
}

let videos = [
    {
        rating: 2,
        comments: 4,
        views: 54,
        createdAt: "now",
        id: 1,
        title: "hotClip"
    }
    , {
        rating: 2,
        comments: 4,
        views: 54,
        createdAt: "now",
        id: 2,
        title: "hotClip2"
    }, {
        rating: 2,
        comments: 4,
        views: 1,
        createdAt: "now",
        id: 3,
        title: "hotClip3"
    }
];

export const trending = (req, res) => {

    res.render("home", {
        pageTitle: "Home",
        fakeUser: fakeUser,
        videos

    });
};
export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];

    return res.render("watch", { pageTitle: `Watch ${video.title}`, video });
};

export const getEdit = (req, res) => {
    console.log(req.params)
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("search");
// export const deleteVideo = (req, res) => res.send("delete");
// export const upload = (req, res) => res.send("upload");

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
}

export const postUpload = (req, res) => {
    const newVideo = {
        rating: 0,
        comments: 0,
        views: 0,
        createdAt: "just now",
        id: videos.length + 1,
        title: req.body.title
    };
    videos.push(newVideo);
    return res.redirect("/");
}
