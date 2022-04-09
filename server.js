const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use('*', function (req, res) {
    res.status(404).send({ success: false, message: "Page Not Found", error: { name: "Error", message: "Invalid route" } });
});

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})