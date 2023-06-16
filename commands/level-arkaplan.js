const { PermissionsBitField, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "level-arka-plan",
  description: "💙 Levelinizin arka planını ayarlayın!",
  type: 1,
  options: [
    {
      type: 3,
      name: "link",
      description: "Link yaz!",
      required: true
    }
  ],

  
  run: async(client, interaction, db, Rank, AddRank, RemoveRank) => {
    
    const { user, guild, options } = interaction;
    
    const link = options.getString("link")
   
    if(!interaction.member.permissions.has(PermissionsBitField.ManageMessages)) {
      return interaction.followUp({ content: "<:carpi:1117083838590492772> | Mesajları Yönet Yetkin Yok!" })
    }

    db.set(`arkaplan_${interaction.guild.id}`, link)

    interaction.reply("<:tik:1117083842264703016> | Başarılı bir şekilde arka plan ayarlandı!")
    
  }
};
