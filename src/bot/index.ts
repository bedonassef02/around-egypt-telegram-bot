import TelegramBot from 'node-telegram-bot-api';
import {commands} from './utils/helpers/commands';
import {handleCallbackQuery} from './utils/helpers/handle-callback-query';

const TELEGRAM_BOT_TOKEN: string = process.env.TELEGRAM_BOT_TOKEN as string;
export const bot: TelegramBot = new TelegramBot(TELEGRAM_BOT_TOKEN, {polling: true});

bot.setMyCommands(commands);
bot.on('callback_query', handleCallbackQuery);
