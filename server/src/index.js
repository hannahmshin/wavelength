const Koa = require('koa');
const Router = require('koa-router');

const words = require('./words').words;

var app = new Koa();
var router = new Router();

var state = {};

function spectrum(ctx) {
    ctx.body = state
}

function newGame(ctx) {
    const wordIndex = Math.floor(Math.random() * words.length);
    const [left, right] = words[wordIndex];

    const spectrum = {
        'left': left,
        'right': right
    };

    const location = Math.floor(Math.random() * 1000);

    state = {
        spectrum,
        location
    };

    ctx.body = {
        "newGame": true
    };
}

router.get('/spectrum', spectrum)
router.get('/newGame', newGame)

app.use(router.routes());

app.listen(3000);