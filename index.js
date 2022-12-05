
const Discord = require('discord.js'); 
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); 
const config = require('./config.json'); 
const mongodb =require("./DB models/db.server.connect")
require('dotenv').config();
const services =require("./controller/addMessages")
const {printHello} = require('./commands/hello'); 
const {getServerInfo} = require("./commands/serverinfo");
const {printServerID} = require('./commands/server');
const {greetings} = require('./commands/greet');
const {ping} = require('./commands/ping');
const token = process.env.token ?? config.token ?? "No Token was specified." 
const prefix = process.env.prefix ?? config.prefix ?? "!" 
const DIG = require("discord-image-generation");
const fetch = require('node-fetch')
const { request } = require('undici');
client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  });
  client.on('messageCreate',async  msg => {

  let message=msg.toJSON(msg.toString());
  console.log(msg.content,"here is content")
  // console.log(message,"here is ");
  let channelId=msg.channelId.toString();
  let author=(msg.author.toJSON());
      let arr = message["content"].toString();
      // console.log(message,"here is author");
      arr=arr.split("|");
      console.log(arr)
      let payload={
       channelName : arr[0]?arr[0]:"",
       text : arr[1]?arr[1]:"",
       url : arr[2]?arr[2]:"",
       imageurl : arr[3]?arr[3]:"",
       button_text : arr[4]?arr[4]:"",
       userName :author.username?author.username:"",
      }
      await services.addMessages(payload);

  if (arr[0] === `${prefix}server info`) {
    msg.channel.send(`${msg.guild.name} - ${msg.guild.id}`);
  }

  if (arr[0].trim()=="!hello") {
    console.log("herrkbjkbsdkjdssdbkjx")
    let avatar = msg.author.displayAvatarURL({ dynamic: false, format: 'png' });
    let img = await new DIG.Blur().getImage(avatar)
    let embedd = new Discord.MessageEmbed()
    .setColor(0x3498DB)
    .setTitle(payload.text)
    .setURL(payload.url)
    .setImage(payload.imageurl)
    await  msg.channel.send({ embeds: [embedd] });
  } 
 if(arr[0] === `${prefix}greet`) {
    msg.channel.send(greetings());
  }

  if(arr[0] === `${prefix}ping`) {

    let photodes = "NO description";
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Image Title")
    .setThumbnail("https://nodejs.org/en/docs/inspector")
    .setImage("https://picsum.photos/200/300")
    .setDescription(photodes);
    await msg.channel.send({ embeds: [embed]});
  }

  if (msg.content === `${prefix}serverinfo`) {
    msg.channel.send({ embeds: [getServerInfo(msg.guild)] })
  }
  });

  client.on('guildMemberAdd', (member) => {
  member.send('Welcome to the server!');
  })

  client.login(token); 
