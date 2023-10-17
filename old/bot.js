const discord = require("discord.js")
const cliente = new discord.Client()

cliente.on('ready', () => {
    console.log("logado")
})

cliente.on('message', (message) => {
    if(message.content === "oi"){
        message.reply("oiii")
    }
})

cliente.login('MTE2MzgzMjAyMzA5NDQwNzIwOA.GoiU24.KDvu1sTipz_6S556OQ6J1nvRupjOoPWNKsgP_k')