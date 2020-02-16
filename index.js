const TelegramBot = require("node-telegram-bot-api");
const token = "1000516094:AAGQ_N342B-FC6iOn1OD9q-eQEoBs3IfSYk";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", msg => {
  console.log(">>>>>>>>>", msg);
  bot.sendMessage(msg.chat.id, "Hello!, " + msg.from.first_name);
});
