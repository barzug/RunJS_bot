const Telegraf = require('telegraf')

const ConsoleMock = function() {
    this._message = '';
}

ConsoleMock.prototype.log = function (text) {
    this._message += `\n${text}`
};

ConsoleMock.prototype.getMessage = function () {
    return this._message;
};


const bot = new Telegraf('534174738:AAG4OcO3uRif_TzSUt9o6WbtA9jwDTJ5r04');

bot.start((ctx) => ctx.reply('Hey!'))

bot.on('message', (ctx) => {
    let console = new ConsoleMock();

    try {
        eval(ctx.message.text);
    } catch (e) {
        console.log(e);
    }

    ctx.reply(console.getMessage());
});

bot.startPolling();