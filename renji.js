#cmd install renji.js module.exports = {
	config: {
		name: "shisui",
		aliases: ["shi"],
		version: "1.0",
		author: "**Renji Starfall**", // do not change this credits
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of Renji",
		longDescription: "sends u pic of Renji",
		category: "meme",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.ibb.co/Qns597W/image.jpg",
"https://i.ibb.co/CnCRd9Y/image.jpg",
"https://i.ibb.co/QP2HzQs/image.jpg",
"https://i.ibb.co/PhTXc7x/image.jpg",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '🎀✨**Renji Starfall**✨🎀',attachment: await global.utils.getStreamFromURL(img)
})
}
    }
