
// const params = {
//     method: 'post',
//     headers: {
//         'content-type' : 'application/json'
//     },
//     body:JSON.stringify({
//         text: 'Hello World',
//         chat_id:-4279815147
//     })
// }

const TelegramBot = require('https://api.telegram.org/bot');
const params = require('path');
const fs = require('fs');

const token = '7207231079:AAFR21ydwp2ekBoB3ZTgIuQcPFQiCT9DD7U/sendPhoto';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Используй команду /sendphoto.');
});

bot.onText(/\/sendphoto/, (msg) => {
    const chatId = msg.chat.id;

    const photoPath = path.resolve(__dirname, 'your_photo.jpg');
    const caption = 'Это фото с описанием.';

    bot.sendPhoto(chatId, photoPath, { caption: caption })
        .then(() => console.log('Photo sent successfully'))
        .catch(error => console.log('Error sending photo:', error));
});

fetch(`https://api.telegram.org/bot${token}/sentMessang` ,params);