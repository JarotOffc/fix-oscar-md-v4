import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw 'Link Nya Mana'
m.reply('tunggu')
 let res = await fetch(`https://api.ibengtools.my.id/api/download/tiktok?url=${args[0]}&apikey=ibeng`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { video, description, username } = json.result
let result = `⟐⟞⟚⟝⟮ *Title:* ⟯⟞⟚⟝⟐
┇⟣⟪ ${username} ⟫⟢
▥ ━┉┄┄┈┈ ▢

┇⟐⟞⟚⟝⟮ *Author* ⟯⟞⟚⟝⟐
▥ ━┉┄┄┈┈ ▢
${description}
◈ ━┉┈┄┈┈ ►`
conn.sendButtonVid(m.chat, video, result, '_© Created by Jarot_', `Audio`, `.gett ${args[0]}`, m)
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']

handler.command = /^(tt|tiktok)$/i
handler.limit = true
export default handler
