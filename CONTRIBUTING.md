
# discord-bot-of-hacktoberfest-2021
The goal of this project is to make adding code to a discord bot as easy or as hard as you'd like to commit to! Feel free to add simple text response commands, use a free API to return data, or anything else you can imagine.

## Getting Started
* Fork or clone this repository to your own Github repositories.
* Open using your IDE of choice. I recommend VS Code and using the Github Desktop extension for version control.

## How to Add a Command of Your Own
* Create a new file in the 'commands' folder. Name it something indicative of what you wish to accomplish with it, and add `.js` extension at the end like the others.
* Copy the content from `example.js` into your file and reformat it to match what you will be doing.
* Now you are ready to code! Get creative. You can return simple string messages, calculations, a free API's data, or anything else you can imagine.
* With your command file ready, it is time to import it and call it in `index.js`.
* In Section B of `index.js`, put your exported functions in the `{}` and reference your file in the commands folder with `./commands/yourfile`. 
* The import should follow this format: `const {functionToSendToIndexDotJS} = require('./commands/example');`
* If you are importing multiple functions, separate them with a comma: `const {functionToSendToIndexDotJS, anotherFunction, andYetAnother} = require('./commands/example');`
* In Section D of `index.js`, you will call your imported function similar to the other examples. You will need to make your own if statement. Label it with a comment '//' so everyone can easy see what it does.
```
if (msg.content === `${prefix}hello`) {
    msg.channel.send(printHello());
  } 
```
* In the `${prefix}hello` string, you will change the value to be whatever you want your command to be when written into the Discord server. This is what the bot listens for. The ${prefix} is for the bot to check whether a message has the prefix for a command or not, so all of your if statements should start with a ${prefix}.
* Please use an `${prefix}` at the start of it, as this helps to prevent unintended bot requests when users are conversing normally.
* `msg.channel.send()` handles sending your function/data to the Discord channel in response to the user request. You will replace the `printHello()` in its parenthesis to whatever you need to send the function you've made.

## How to Make a Push Request Back to the Original Project
#### From A Fork
https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
#### From A Clone/Different Branch
https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request




