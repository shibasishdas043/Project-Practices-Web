const TelegarmBOT = require("node-telegram-bot-api");
const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

const bot = new TelegarmBOT(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText("joke", async (msg) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  // const chatId = msg.chat.id;
  //   const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  //   bot.sendMessage(chatId, resp);

  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  //   bot.sendMessage(chatId, "Hello");

  const response = await axios.get(
    "http://www.official-joke-api.appspot.com//random_joke",
    );
    const setup = response.data.setup;
    const punchline = response.data.punchline;

  if (response !== null) {
    bot.sendMessage(chatId, `${setup}, ${punchline}`);
  }
  console.log(`Recieved`, msg);
});

console.log(process.env.TELEGRAM_TOKEN);
