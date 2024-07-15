module.exports = {
  config: {
    name: "help",
    version: "1.17",
    author: "𝗥𝗲𝗻𝗷𝗶 𝗦𝘁𝗮𝗿𝗳𝗮𝗹𝗹",
    // autres propriétés de configuration
  },

  onStart: async function ({ message, args, commands, getLang }) {
    const numberOfCommandsPerPage = 10;
    const page = parseInt(args[0]) || 1;
    const startIdx = (page - 1) * numberOfCommandsPerPage;

    // Récupérer toutes les commandes
    const allCommands = Array.from(commands.values());

    // Filtrer les commandes en fonction du numéro de page et trier par priorité
    const filteredCommands = allCommands
      .filter((command, index) => index >= startIdx && index < startIdx + numberOfCommandsPerPage)
      .sort((a, b) => a.config.priority - b.config.priority);

    // Construire le message de réponse
    let msg = "";
    filteredCommands.forEach((command, index) => {
      const commandNumber = startIdx + index + 1;
      const name = command.config.name;
      const shortDescription = getLang(command.config.shortDescription.en); // Utiliser la description courte en anglais par défaut
      msg += `🎏${commandNumber}🎏. ${name}: \n     ✏️${shortDescription}\n\n`;
    });

    // Construire le message final avec l'en-tête et le pied de page
    const totalPages = Math.ceil(allCommands.length / numberOfCommandsPerPage);
    const prefix = message.prefix || "!"; // Remplacer par votre préfixe de commande
    const header = `╔╦══• •✠•❀•✠ • •══╦╗\n🫠°°°°°ᒪᑌ᙭ TYᒪᗴᖇ°°°°°🫠\n╚╩══• •✠•❀•✠ • •══╩╝\n\n`;
    const footer = `\n🛑𝗣𝗮𝗴𝗲 [ ${page}/${totalPages} ] 🛑\n➤🔖 𝙸 𝚑𝚊𝚟𝚎 𝙰𝚌𝚝𝚞𝚊𝚕𝚕𝚢「 ${allCommands.length} 」𝗖𝗠𝗗s \n➤🔖 𝗧𝗬𝗣𝗘: ${prefix}help <𝙿𝙰𝙶𝙴> t𝙾 𝚝𝚑𝚎 𝚟𝚒𝚎𝚠 𝚕𝚒𝚜𝚝 𝚘𝚏 𝙲𝚖𝚍𝚜\n➤🔖 » 𝗧𝗬𝗣𝗘: ${prefix}help 𝚃𝚘 𝚝𝚑𝚎 𝚍𝚎𝚝𝚊𝚒𝚕𝚜 𝚘𝚏 𝚑𝚘𝚠 𝚝𝚘 𝚞𝚜𝚎 𝚝𝚑𝚎 𝙲𝚘𝚖𝚖𝚊𝚗𝚍\n`;

    // Envoyer le message
    await message.reply(header + msg + footer);
  }
};
