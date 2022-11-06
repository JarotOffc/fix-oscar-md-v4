import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `☰⃟⟣⟔ 𝙺𝚊𝚛𝚝𝚞 𝙸𝚗𝚝𝚛𝚘 ⟓⟢⃟
⫹⫺ 𝙽𝚊𝚖𝚊:
⫹⫺ 𝚄𝚖𝚞𝚛:
⫹⫺ 𝙰𝚕𝚊𝚖𝚊𝚝:
⫹⫺ 𝙷𝚘𝚋𝚒:
⫹⫺ 𝙿𝚊𝚜𝚊𝚗𝚐𝚊𝚗:
`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'MENU','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://facebook.com/sadtime098",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'Iɴᴛʀᴏᴄᴀᴅᴜᴛɪᴏɴ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler