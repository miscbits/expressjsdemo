const express = require('express');
const app = express();
const port = 3000;

const controller = require('./controller');
const middleware = require('./middleware');
app.get('/home', (req, res) => {
    res.send("This is the homepage!")
});

app.use(middleware.validate);

// get all users
app.get('/users', controller.index);
// create a new user
app.post('/users', controller.store);
// show a user
app.get('/users/:id', controller.show);
// update a user
app.put('/users/:id', controller.update);
// delete a user
app.delete('/users/:id', controller.destroy);


app.listen(port, () => {
    console.log("Our app is listening on port 3000");
});
