const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const axios = require('axios');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// DeepL API key
const deeplApiKey = '250db6ff-b96d-475b-874b-2371c490dbf9:fx';

// Emoji to language mapping
const emojiToLanguage = {
    '🇺🇸': 'EN', // United States flag for English
    '🇫🇷': 'FR', // France flag for French
    "🇪🇸": "ES", // Spain flag for Spanish
    "🇲🇽": "ES", // Mexico flag for Spanish
    "🇵🇹": "PT", // Portugal flag for Portuguese
    "🇧🇷": "PT-BR", // Brazil flag for Brazilian Portuguese
    "🇰🇷": "KO"  // South Korea flag for Korean
};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (!message.author.bot) {
        // Check for command to translate text
        if (message.content.startsWith('!translate')) {
            // Retrieve user's preferred language from their Discord settings
            const userPreferredLanguage = message.author.client.preferredLocale || 'EN'; // Default to English if not set
            const text = message.content.slice('!translate'.length).trim();

            try {
                const response = await axios({
                    method: 'post',
                    url: 'https://api-free.deepl.com/v2/translate',
                    data: {
                        auth_key: deeplApiKey,
                        text: text,
                        target_lang: userPreferredLanguage
                    }
                });
                const translatedText = response.data.translations[0].text;
                message.reply(translatedText);
            } catch (error) {
                console.error(error);
                message.reply('An error occurred while translating the text.');
            }
        }
    }
});

client.on('messageReactionAdd', async (reaction, user) => {
    if (user.bot) return;
    const message = reaction.message;
    const emoji = reaction.emoji.name;

    // Check if the reaction is a flag emoji
    if (emoji in emojiToLanguage) {
        const targetLanguage = emojiToLanguage[emoji];
        const originalMessage = message.content;

        try {
            const response = await axios({
                method: 'post',
                url: 'https://api-free.deepl.com/v2/translate',
                data: {
                    auth_key: deeplApiKey,
                    text: originalMessage,
                    target_lang: targetLanguage
                }
            });
            const translatedText = response.data.translations[0].text;
            message.reply(translatedText);
        } catch (error) {
            console.error(error);
            message.reply('An error occurred while translating the text.');
        }
    }
});

// Log in to Discord with your app's token
client.login('const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const axios = require('axios');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// DeepL API key
const deeplApiKey = 'your_deepl_api_key';

// Emoji to language mapping
const emojiToLanguage = {
    '🇺🇸': 'EN', // United States flag for English
    '🇫🇷': 'FR', // France flag for French
    // Add more mappings as needed
};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (!message.author.bot) {
        // Check for command to translate text
        if (message.content.startsWith('!translate')) {
            // Retrieve user's preferred language from their Discord settings
            const userPreferredLanguage = message.author.client.preferredLocale || 'EN'; // Default to English if not set
            const text = message.content.slice('!translate'.length).trim();

            try {
                const response = await axios({
                    method: 'post',
                    url: 'https://api-free.deepl.com/v2/translate',
                    data: {
                        auth_key: deeplApiKey,
                        text: text,
                        target_lang: userPreferredLanguage
                    }
                });
                const translatedText = response.data.translations[0].text;
                message.reply(translatedText);
            } catch (error) {
                console.error(error);
                message.reply('An error occurred while translating the text.');
            }
        }
    }
});

client.on('messageReactionAdd', async (reaction, user) => {
    if (user.bot) return;
    const message = reaction.message;
    const emoji = reaction.emoji.name;

    // Check if the reaction is a flag emoji
    if (emoji in emojiToLanguage) {
        const targetLanguage = emojiToLanguage[emoji];
        const originalMessage = message.content;

        try {
            const response = await axios({
                method: 'post',
                url: 'https://api-free.deepl.com/v2/translate',
                data: {
                    auth_key: deeplApiKey,
                    text: originalMessage,
                    target_lang: targetLanguage
                }
            });
            const translatedText = response.data.translations[0].text;
            message.reply(translatedText);
        } catch (error) {
            console.error(error);
            message.reply('An error occurred while translating the text.');
        }
    }
});

// Log in to Discord with your app's token
client.login('MTI0MTg1MjU0Mzc4MTU2ODYwMg.G63xVU.PuBJqkd7DZZqnmiJaJGP2YONTo5qsEJ0tSE-RA');
');
