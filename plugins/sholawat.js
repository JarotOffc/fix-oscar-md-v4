import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/sholawat.opus')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ",
    mediaType: 2,
    description: "https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ", 
    title: 'oscar-ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.customPrefix = /^(sholawat)$/i
handler.command = new RegExp

export default handler