const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"rol-oluştur",
    description: '💙 Yeni Bir Rol Oluşturursun!',
    type:1,
    options: [
        {
            name:"isim",
            description:"Oluşturulucak Rolün Adı!",
            type:3,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "<:carpi:1117083838590492772> | Rolleri Yönet Yetkin Yok!", ephemeral: true})
    const isim = interaction.options.getString('isim')
   interaction.guild.roles.create({name: isim})
    interaction.reply({content: "<:tik:1117083842264703016> | Başarıyla **"+isim+"** Rolü Oluşturuldu."})
}

};
