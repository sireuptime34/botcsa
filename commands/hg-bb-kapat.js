const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"giriş-çıkış-kapat",
    description: '💙 Giriş Çıkış Sistemini kapatırsın!',
    type:1,
    options: [],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "<:carpi:1117083838590492772> | Kanalları Yönet Yetkin Yok!", ephemeral: true})
   db.delete(`hgbb_${interaction.guild.id}`)
   interaction.reply("<:tik:1117083842264703016> | Hoşgeldin Güle Güle Kanalı Başarıyla Sıfırlandı!")
}

};
