export const trending = (req, res) => res.send("homepage videos");
export const see = (req, res) => {
    console.log(req.params)
    res.send(`watch ${req.params.id}`);
};

export const edit = (req, res) => {
    console.log(req.params)
    res.send("edit");
};
export const search = (req, res) => res.send("search");
export const deleteVideo = (req, res) => res.send("delete");
export const upload = (req, res) => res.send("upload");