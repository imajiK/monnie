const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`El comando ${interaction.commandName} no fue encontrado.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error al ejectutar el comando ${interaction.commandName}`);
			console.error(error);
		}
	},
};