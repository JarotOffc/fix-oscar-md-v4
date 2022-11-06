let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 𝙳𝚘𝚗𝚊𝚜𝚒 𝚄𝚗𝚝𝚞𝚔 𝙱𝚘𝚝 」
│ • 𝚙𝚞𝚕𝚜𝚊: [${global.ppulsa}]
│ • 𝙳𝚊𝚗𝚊: [${global.pdana}]
❏────
`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
