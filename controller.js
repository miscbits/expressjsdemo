module.exports = {
    index: (req, res) => {
        res.send("This is the page showing all users");
    },
    store: (req, res) => {
        // TODO save a user
        res.send("You created a user")
    },
    show: (req, res) => {
        res.send("This is the function where we show the user with id: " + req.params.id)
    },
    update: (req, res) => {
        res.send("updating user: " + req.params.id);
    },
    destroy: (req, res) => {
        res.send("deleting user: " + req.params.id);
    }
}