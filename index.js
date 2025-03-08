const { Telegraf } = require('telegraf')
const process = require('node:process')

const bot = new Telegraf(process.env.TOKEN)
bot.start(ctx => ctx.reply('Say hi to me'))
bot.help(ctx => ctx.reply('This is greeting bot, please say hi'))
bot.hears('hi', ctx => ctx.reply('Hi there, you are awesome'))
bot.launch()