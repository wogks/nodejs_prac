const fakeUser = {
    username: "nic",
    loggedIn: false
}

export const trending = (req, res) => {
    const videos = [
        {
            rating: 2,
            comments: 4,
            views: 54,
            createdAt: "now",
            id: 1,
            title: "hotClip"
        }
    ];
    res.render("home", {
        pageTitle: "Home",
        fakeUser: fakeUser,
        videos

    });
};
export const see = (req, res) => {
    res.render("watch");
};

export const edit = (req, res) => {
    console.log(req.params)
    res.render("edit");
};
export const search = (req, res) => res.send("search");
export const deleteVideo = (req, res) => res.send("delete");
export const upload = (req, res) => res.send("upload");