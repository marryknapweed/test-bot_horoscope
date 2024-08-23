const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot("7503354549:AAHatzt5NKPsG4FCjoBjU5InsMXH8FkAg64", {
  polling: true,
});

// Отправляет ссылку на ваше мини-приложение при получении команды /start
bot.onText(/\/start/, msg => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Добро пожаловать! Вот ссылка на наше приложение: https://marryknapweed.github.io/wedding-invitation/"
  );
});
