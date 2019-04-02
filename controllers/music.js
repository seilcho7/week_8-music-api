function create(req, res) {
    res.json({ message: "Created"});
}

function retrieveAll(req, res) {
    res.json({ message: "Retrieved all"});
}

function retrieveOne(req, res) {
    const status = null;
    const {id} = req.params;
    if (status) {
        res.status(200).json({ message: `Retrieved ${id}`});
    } else if (status === null) {
        res.status(400).send("404 Error.");
    };
}

function update(req, res) {
    res.json({ message: "Updated"});
}

function deleteOne(req, res) {
    res.json({ message: "Deleted"});
}

module.exports = {
    create,
    retrieveAll,
    retrieveOne,
    update,
    deleteOne
};