const Koa = require('koa');
const Router = require('koa-router');

const words = require('./words').words;

var app = new Koa();
var router = new Router();

function newGame(ctx) {
    const wordIndex = Math.floor(Math.random() * words.length);
    const word = words[wordIndex];

    const spectrum = {
        'left': word[0],
        'right': word[1]
    };

    const location = Math.floor(Math.random() * 1000);

    ctx.body = {
        spectrum,
        location
    };
}

router.get('/newGame', newGame)

app.use(router.routes());

app.listen(3000);