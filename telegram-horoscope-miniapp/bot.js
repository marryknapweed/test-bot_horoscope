const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot("7503354549:AAHGAdwTFK4nOwW3Iwc9UHF30o2Rp_3Knc8", {
  polling: true,
});

// Отправляет ссылку на ваше мини-приложение при получении команды /start
bot.onText(/\/start/, msg => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Добро пожаловать! Вот ссылка на наше приложение: https://marryknapweed.github.io/test-bot_horoscope/"
  );
});
