var Twig = require("twig"),
    express = require('express'),
    app = express();

app.get('/', function (req, res) {
    res.render('index.twig', {
        
    });
});

app.use(express.static('public'));

app.listen(9999);