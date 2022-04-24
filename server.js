const express = require("express");
const app = express();
const port = 3000;
app.use(express.static(__dirname));
app.set('view engine', 'ejs')


app.get('/', ((req, res) => {
    res.render('mainpage')
}))

app.get('/sign', ((req, res) => {
    res.render('sign')
}))

app.get('/about', ((req, res) => {
    res.render('about')
}))

app.get('/weather', ((req, res) => {
    res.render('weather')
}))

app.get('/hotel', ((req, res) => {
    res.render('hotel')
}))

app.use(function(req, res, next) {
    res.status(404).send('404');
});

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);