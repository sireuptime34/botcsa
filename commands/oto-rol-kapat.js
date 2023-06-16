const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"oto-rol-kapat",
    description: '💙 Oto-Rol Sistemini kapatır!',
    type:1,
    options: [],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "<:carpi:1117083838590492772> | Rolleri Yönet Yetkin Yok!", ephemeral: true})
    db.delete(`otorol_${interaction.guild.id}`)
    db.delete(`botrol_${interaction.guild.id}`)
    interaction.reply({content: "<:tik:1117083842264703016> | Otorol Başarıyla kapatıldı!"})
}

};
