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

export const edit = (req, res) => {
    console.log(req.params)
    res.render("edit");
};
export const search = (req, res) => res.send("search");
export const deleteVideo = (req, res) => res.send("delete");
export const upload = (req, res) => res.send("upload");