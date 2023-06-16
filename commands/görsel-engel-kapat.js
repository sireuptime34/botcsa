const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"görsel-engel-kapat",
    description: '💙 Görsel engel sistemini kapatırsın!',
    type:1,
    options: [],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "<:carpi:1117083838590492772> | Kanalları Yönet Yetkin Yok!", ephemeral: true})
   db.delete(`görselengel.${interaction.guild.id}`)
   interaction.reply("<:tik:1117083842264703016> | Görsel Engel başarıyla kapatıldı!")
}

};