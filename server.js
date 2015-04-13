var express = require('express'),
    app = express();
/**var favicon = require('serve-favicon');*/


app.use(express.static(__dirname, '/'));
/**app.use(favicon(__dirname + '/favicon.png'));*/

app.get('/wines/:id', function(req, res) {
    var wineId = parseInt(req.params.id);
    var data = {};
    for (var i=0, len=wines.length; i<len;i++) {
        if (wines[i].id === wineId) {
            data = wines[i];
            break;
        }
    }
    res.json(data);
});

app.get('/wines', function(req, res) {
    res.json(wines);
});

app.delete('/wines/:id', function(req, res) {
    var wineId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0, len=wines.length; i<len; i++) {
        if (wines[i].id === wineId) {
            wines.splice(i,1);
            data = { status: true};
            break;
        }
    }
    res.json(data);

});

app.post('/wines/:id', function(req, res) {
    var newWine = JSON.parse(req.params.id);
    newWine.id = wines.length;
    newWine.joined = Date.now();
    wines.push(newWine);
    res.json(wines);
});

app.listen(process.env.PORT || 5000)

console.log('Express listening on port 8080');

        var wines = [{"winery":"Volařík","grape":"Rulandské šedé","country":"CZ","year":2014,"color":"Bílá","attribute":"Výběr z bobulí","appellation":"Železná hora","price":350,"id":0,"joined":1421678571292},{"winery":"Solařík","grape":"Modrý portugal","country":"CZ","year":2013,"color":"Červená","attribute":"Jakostní víno","price":100,"id":1,"joined":1421678714486},{"winery":"Chateau Valtice","grape":"Cabernet Blanc","country":"CZ","year":2012,"color":"Bílá","attribute":"Výběr z hroznů","appellation":"Valtice - Hintertály","price":229.1,"id":2,"joined":1421678843764},{"winery":"Víno Hruška","grape":"Chardonnay","country":"CZ","year":2012,"color":"Bílá","attribute":"Výběr z hroznů","appellation":"Bílé karpaty","price":269,"id":3,"joined":1421681108835},{"winery":"Vinselekt Michlovský","grape":"Frankovka","country":"CZ","year":2012,"color":"Červená","attribute":"Jakostní","appellation":"Rakvice - Trkmansko","price":106,"id":4,"joined":1421681424066},{"winery":"Nosreti","grape":"Rulandské šedé","country":"CZ","year":2009,"color":"Bílá","attribute":"Pozdní sběr","appellation":"Zaječí","price":250,"id":5,"joined":1421689724887},{"winery":"Chante Alouette","grape":"Cuvéé","country":"F","year":2011,"color":"Červená","attribute":"-","appellation":"Saint-Emilion","price":400,"id":6,"joined":1421731243307}]

