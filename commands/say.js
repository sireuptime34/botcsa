const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "say",
  description: "💙 Sunucuda kaç üye olduğunu gösterir.",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const memberCount = interaction.guild.members.cache.filter((member) => !member.user.bot).size || 0
    const fakeMemberCount = interaction.guild.members.cache.filter((member) => new Date().getTime() - client.users.cache.get(member.id).createdAt.getTime() < 1296000000).size || 0
    const botCount = interaction.guild.members.cache.filter((member) => member.user.bot).size || 0
    const permissionsMemberCount = interaction.guild.members.cache.filter((member) => member.permissions.has(PermissionsBitField.Flags.Administrator)).size || 0
	        const onlinekişi = interaction.guild.members.cache.filter(o => !o.user.bot && o.presence && o.presence.status === 'online').size
        const boştakişi = interaction.guild.members.cache.filter(o => !o.user.bot && o.presence && o.presence.status === 'idle').size
        const retmekişi = interaction.guild.members.cache.filter(o => !o.user.bot && o.presence && o.presence.status === 'dnd').size

    const embed = new EmbedBuilder()
    .setTitle('Aries Bot')
    .setThumbnail(`${interaction.guild.iconURL({ dynamic: true })}`)
    .setFooter({text: interaction.user.tag+" İstedi."})
    .setDescription(`<:member:1039607059357913098> | Toplam Üye: **${interaction.guild.memberCount}** ( Çevrimiçi: **${onlinekişi}** | Boşta: **${boştakişi}** | Rahatsız Etmeyin **${retmekişi}** )\n<:tik:1117083842264703016> | Gerçek: **${memberCount}**\n<:uyari:1040649846400499712> | Sahte: **${fakeMemberCount}**\n<:Bot:1106994122344104067> | Bot: **${botCount}**\n<:guardian:1044325535800635422> | Yönetici Yetkili: **${permissionsMemberCount}**`)
    .setColor("Random")
interaction.reply({embeds: [embed]})
  }  

};