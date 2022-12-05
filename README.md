# discord-bot-of-hacktoberfest-2021
A community-driven project for the 2021 Hacktoberfest hackathon. 2022 contributions are welcome!

## Contributing
Follow the CONTRIBUTING.md instructions to add content.

## Dependents
* `npm i discord.js` https://www.npmjs.com/package/discord.js
* `npm i dotenv` https://www.npmjs.com/package/dotenv

## Join the Discord Server Where This Bot Is Hosted
Feel free to join my server set up for this project and the 2021 Hacktoberfest: https://discord.gg/T77xm3ayFP

## How to Set Up Your Discord Bot On Your Personal Server (for testing or more permanently)
* Clone or fork this repo. Open in your IDE of choice and install dependents with `npm install` in the command line/terminal.
* Log in to Discord in your browser and create a new Application here: https://discord.com/developers/applications
* Navigate to the `Bot` tab and create a new bot. Note the `token` ID that is listed here.
* Create a file called `config.json` in your cloned project directory and copy/paste the code from `example.config.json` into it.
* In `config.json`, add your `token` ID, which can be found on the Bot of your discord application (click into the bot) that you can access from here: https://discord.com/developers/applications/`your-application-ID`/bot
* Add bot to any servers you manage by entering this link into your browser: https://discordapp.com/oauth2/authorize?client_id=APLICATION_ID&scope=bot 
* The above APPLICATION ID in the link is to be replaced by your `APPLICATION ID` (or possibly called CLIENT ID) found at https://discord.com/developers/applications/`your-application-ID`/information.
* Start the bot from the command line by navigating to the project folder and using `node --inspect index.js`.
* If the bot appears to be offline, it is because you need to have the bot running from the command line (`node --inspect index.js`) to use it.

## Useful Troubleshooting Links
* https://stackoverflow.com/questions/68694195/how-do-i-fix-client-missing-intents-error-disord-js
* https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links
* https://devcenter.heroku.com/articles/config-vars#managing-config-vars
* https://smithspencer817.medium.com/understanding-modules-in-node-js-ecac051e0f4
* https://devcenter.heroku.com/articles/config-vars#accessing-config-var-values-from-code
