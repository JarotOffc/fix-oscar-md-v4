const {
    default: _makeWaSocket,
    makeWALegacySocket,
    proto,
    downloadContentFromMessage,
    jidDecode,
    areJidsSameUser,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    WAMessageStubType,
    extractMessageContent,
    jidNormalizedUser, 
    MessageType,
    Mimetype
} = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
import moment from 'moment-timezone'
let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let handler = async (m, {conn}) => {
 let name = conn.getName(m.sender)
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: ᯤ 𝙅𝙖𝙧𝙤𝙩 𝙊𝙛𝙘
item.ORG: ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ
item1.TEL;waid=6285850539404:6285850539404@s.whatsapp.net
item1.X-ABLabel: ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ
item2.EMAIL;type=INTERNET: Jarott@gmail.com
item2.X-ABLabel:📫 Gmail
item3.ADR:;;📍 Jawa Timur - Indonesian;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📮 Location Owner
item4.URL:https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ
item4.X-ABLabel:Youtube
item5.URL:https://github.com/Alpiii22
item5.X-ABLabel:Github
item6.URL:https://instagram.com/jarotr_
item6.X-ABLabel:Instagram Jarot
item7.URL:𝚈𝚘𝚞𝚝𝚞𝚋𝚎: 𝙹𝚊𝚛𝚘𝚝 𝙾𝚏𝚏𝚌
item7.X-ABLabel: 𝚂𝚞𝚜𝚌𝚛𝚒𝚋𝚎 𝙲𝚑𝚊𝚗𝚎𝚕 𝚓𝚊𝚛𝚘𝚝
item1.TEL;waid=6285943036511:6285850539404@s.whatsapp.net
item1.X-ABLabel: Creator Bot
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let jarot = 'https://telegra.ph/file/1b4913c4196e640732efa.jpg'
await conn.send3ButtonImg(m.chat, jarot, `${ucapan()}\n\n𝙷𝚊𝚕𝚘 𝙺𝚊𝚔, @${m.sender.split`@`[0]} 👋\n𝙸𝚗𝚒 𝙽𝚘𝚖𝚎𝚛 𝙾𝚠𝚗𝚎𝚛 𝙱𝚘𝚝, 𝙹𝚊𝚗𝚐𝚊𝚗 𝙳𝚒 𝚂𝚙𝚊𝚖 𝚈𝚊\n𝙺𝚊𝚕𝚊𝚞 𝙼𝚊𝚞 𝙳𝚒𝚜𝚊𝚟𝚎 𝚂𝚢𝚊𝚛𝚊𝚝 𝙽𝚢𝚊 𝙷𝚊𝚛𝚞𝚜 𝙿𝚊𝚔𝚊𝚒 𝙿𝚛𝚘𝚏𝚒𝚕 𝚜𝚎𝚗𝚍𝚒𝚛𝚒\n𝙺𝚊𝚕𝚊𝚞 𝙶𝚊𝚔 𝙰𝚍𝚊 𝙿𝚛𝚘𝚏𝚒𝚕 𝙶𝚊𝚔 𝙱𝚊𝚔𝚊𝚕𝚊𝚗 𝙳𝚒 𝚁𝚎𝚜𝚙𝚘𝚗\n𝙹𝚒𝚔𝚊 𝙿𝚎𝚗𝚝𝚒𝚗𝚐 𝙻𝚊𝚗𝚐𝚜𝚞𝚗𝚐 𝚆𝚊 𝙾𝚠𝚗𝚎𝚛\n\n⫹⫺ Date : *${week} ${date}*\n⫹⫺ Time : *${wib}*`, wm, 'Source', '.sc', 'Menu', '.menu', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [ye, ' *Years 🗓️*\n',mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "⊙─❲ *SELAMAT DINIHARI* ❳─⊙"
if (time >= 4) {
res = "⊙─❲ *SELAMAT PAGI* ❳─⊙"
}
if (time >= 10) {
res = "⊙─❲ *SELAMAT SIANG* ❳─⊙"
}
if (time >= 15) {
res = "⊙─❲ *SELAMAT SORE* ❳─⊙"
}
if (time >= 18) {
res = "⊙─❲ *SELAMAT MALAM* ❳─⊙"
}
return res
}