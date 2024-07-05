module.exports = {
	config: {
		name: "Renji",
		aliases: ["shi"],
		version: "1.0",
		author: "ʬɸʬ Renji Strarfall ʬɸʬ", // do not change this credits
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of 𝐑𝐞𝐧𝐣𝐢",
		longDescription: "sends u pic of 𝐑𝐞𝐧𝐣𝐢",
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
  body: '🎀𝐑𝐞𝐧𝐣𝐢 𝐒𝐭𝐚𝐫𝐟𝐚𝐥𝐥🎀',attachment: await global.utils.getStreamFromURL(img)
})
}
  }
