module.exports = {
    validate: (req, res, next) => {
        console.log("I am validating your request");
        console.log("What is the secret password?");
        var secret_password = "smellycatfish";

        var user_password = req.headers.password;

        if (user_password === secret_password) {
            next();
        } else {
            res.send("You did say the secret password")
        }
    }
}