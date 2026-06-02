# Ticket Dashboard Discord Bot

A self-hosted Discord ticket bot with a web dashboard for managing support tickets, ticket panels, transcripts, and staff workflows.

## Overview

Ticket Dashboard Discord Bot is designed for Discord servers that need a structured support system. It combines a Discord bot with a dashboard-based management workflow so administrators and support teams can configure panels, review tickets, and manage support processes more efficiently.

This project is intended for self-hosting, which gives you full control over the bot, its configuration, and the environment it runs in.

## Features

Typical features of a ticket bot with dashboard support include:

- Ticket creation inside Discord.
- Configurable ticket panels.
- Support team and staff role management.
- Ticket logs and transcripts.
- Dashboard-based configuration.
- Category or channel routing.
- Automated ticket open/close workflows.
- Self-hosted deployment.

> Note: The exact feature set depends on the implementation in the repository.

## Requirements

Before installing the bot, make sure you have:

- [Node.js](https://nodejs.org/) installed, preferably an LTS version.
- `npm` available in your terminal.
- [Git](https://git-scm.com/) installed.
- A Discord server where you have administrator permissions.
- A Discord bot application created in the [Discord Developer Portal](https://discord.com/developers/applications).

If this project includes a separate web dashboard service, you may also need:

- A free port for the dashboard web server.
- Optional reverse proxy setup such as Nginx.
- Optional database configuration if the project stores ticket data externally.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/naix1337/ticket-dashboard-discordbot.js.git
cd ticket-dashboard-discordbot.js
```

### 2. Install dependencies

```bash
npm install
```

If the project contains both bot and dashboard subfolders, install dependencies in each relevant directory.

Example:

```bash
cd bot && npm install
cd ../dashboard && npm install
```

## Discord bot setup

### 1. Create a Discord application

1. Open the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click **New Application**.
3. Give the application a name.
4. Open the **Bot** tab and create a bot user.
5. Copy the bot token and keep it private.

### 2. Enable required settings

Depending on the project, enable the intents the bot needs under **Bot > Privileged Gateway Intents**:

- Message Content Intent
- Server Members Intent
- Presence Intent

Only enable intents that are actually required by the project.

### 3. Invite the bot to your server

Under **OAuth2 > URL Generator**, select:

- `bot`
- `applications.commands`

Then choose the permissions required for ticket handling, for example:

- Manage Channels
- Manage Roles
- Send Messages
- Read Message History
- Attach Files
- Embed Links
- Use Slash Commands

Open the generated invite URL and add the bot to your server.

## Configuration

Most Discord bot projects use either environment variables or JSON configuration files.

Common configuration files include:

- `.env`
- `config.json`
- `settings.json`

### Example `.env`

```env
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_application_id_here
GUILD_ID=your_server_id_here
PORT=3000
```

### Possible additional settings

Depending on the project structure, you may also need to configure:

- Dashboard URL or domain.
- Database connection.
- Ticket category ID.
- Transcript log channel ID.
- Support role IDs.
- Panel channel ID.
- Session secret for the dashboard.

If the repository provides an example file such as `.env.example`, copy it first:

```bash
cp .env.example .env
```

Then edit the values.

## Running the project

### Start with npm

If the repository includes npm scripts, use:

```bash
npm start
```

### Development mode

If a development script exists:

```bash
npm run dev
```

### Direct start

If there is no start script, try the project entry file:

```bash
node index.js
```

or

```bash
node app.js
```

If the dashboard and bot run as separate services, start both parts individually according to the folder structure and package scripts.

## First setup in Discord

After the bot is online, the usual setup flow for a ticket system is:

1. Create or assign a support team role.
2. Set the ticket category or target channels.
3. Configure the ticket panel.
4. Post the panel into a public support channel.
5. Test ticket creation with a normal user account.
6. Verify that staff can access, answer, and close tickets.

## Production deployment

For long-term hosting, use a process manager so the bot restarts automatically if it crashes.

### PM2 example

```bash
npm install -g pm2
pm2 start index.js --name ticket-dashboard-bot
pm2 save
pm2 startup
```

If the dashboard is a separate process, run that service in PM2 as well.

## Troubleshooting

### Bot does not start

- Make sure Node.js and npm are installed correctly.
- Check whether `npm install` completed without errors.
- Verify that the configured entry file actually exists.

### Invalid token

- Regenerate the token in the Discord Developer Portal.
- Update the token in `.env` or the config file.
- Make sure no extra spaces or quotes were added.

### Slash commands do not show up

- Ensure the bot was invited with the `applications.commands` scope.
- Check whether the project requires a separate command registration script.
- Confirm that `CLIENT_ID` and `GUILD_ID` are correct if guild-scoped commands are used.

### Tickets are not created correctly

- Check the bot permissions in the target category and channels.
- Make sure support roles and category IDs are configured properly.
- Verify the dashboard saved the settings correctly if the bot uses a web panel.

## License

Add your repository license here, for example MIT or GPL-3.0.

## Notes

This README was written as a clean starter documentation based on the repository name and the standard structure of Discord ticket bots with dashboard support. For a fully exact README, the actual repository files such as `package.json`, folder structure, config files, database setup, and dashboard implementation should be reviewed and adjusted.
