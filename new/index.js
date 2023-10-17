import { Client, IntentsBitField, Message } from "discord.js";

import * as dotenv from "dotenv"
dotenv.config()

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', () => {
    console.log("No Ar")
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "oi"){
        message.reply("Oi, como você está?")
    }
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "estou bem, e você?"){
        message.reply("Estou melhor com você aqui!")
    }
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "ta fazendo o que?"){
        message.reply("No momento, estou sendo aprimorado pela minha DEV! :)")
    }
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "oii"){
        message.reply("Oi! Que bom te ver por aqui! Sabia que os coalas são capazes de consumir cerca de 2kg de folhas de eucalipto por dia?")
    }
})

client.login(process.env.TOKEN)