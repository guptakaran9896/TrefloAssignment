const { Guild, MessageEmbed } = require("discord.js");

function getServerInfo(server) {
        //https://discord.js.org/#/docs/main/stable/class/Guild you can add any of the variables mentioned here
  let embed = new MessageEmbed();
  embed.setTitle(("Info about: " + server.name + "\u200b")) // add the string "\u200b" in case the variable is null
  embed.setThumbnail(server.iconURL({ dynamic: true }));
  embed.addField("Created At: ", server.createdAt.toDateString() + "\u200b", true)
  embed.addField("Member Count:", server.memberCount + "\u200b", true)
  embed.setTimestamp()
  
  return embed;
}


module.exports.getServerInfo = getServerInfo; // this line exports the above code so you can import it into the 'index.js' file for use.
