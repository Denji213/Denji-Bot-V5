module.exports = {
    config: {
        name: "🥴",
        version: "1.0",
        author: "ʬɸʬ Sønïč Shïsûį ʬɸʬ",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "🥴") return message.reply("𝘔𝘰𝘪 𝘲𝘶𝘪 𝘷𝘰𝘶𝘭𝘢𝘪𝘴 𝘵'𝘦́𝘱𝘰𝘶𝘴𝘦𝘳, 𝘮𝘢𝘪𝘯𝘵𝘦𝘯𝘢𝘯𝘵 𝘤𝘦𝘵𝘵𝘦 𝘵𝘦̂𝘵𝘦 𝘮𝘦 𝘳𝘦𝘱𝘰𝘶𝘴𝘦😖);
    }
}
