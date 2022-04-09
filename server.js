const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const userRoutes = require("./routes/userRoutes");

app.get('/', (req, res)=> {
    console.log(req.url)
    console.log(req.subdomains)
    return res.status(200).send({ success: true, message: "Welcome to App"});
})
app.use('/user', userRoutes);

app.use('*', function (req, res) {
    res.status(404).send({ success: false, message: "Page Not Found", error: { name: "Error", message: "Invalid route" } });
});

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})