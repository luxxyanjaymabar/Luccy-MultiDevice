import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let jarot = `*▸  - —「 𝘚𝘰𝘴𝘪𝘢𝘭 𝘔𝘦𝘥𝘪𝘢 𝘉𝘰𝘵 」—  - ◂*

「 𝘚𝘶𝘱𝘰𝘳𝘵𝘵 𝘉𝘰𝘵 𝘋𝘦𝘯𝘨𝘢𝘯 𝘊𝘢𝘳𝘢 」

*❉ _Follow Tiktok Own_*
⫹⫺ https://www.tiktok.com/@lu6xxy?_r=1&_d=e1698mb050mmgd&language=id&sec_uid=MS4wLjABAAAAjq5YgVLACXOqcXNBZA67odmUk_kzJzNOR1cmk-W1uC2humBWupS2xEX8zFdSpNa8&share_author_id=6834833209927304193&source=h5_t&u_code=dck7lcjek5f33j&timestamp=1666001880&user_id=6834833209927304193&sec_user_id=MS4wLjABAAAAjq5YgVLACXOqcXNBZA67odmUk_kzJzNOR1cmk-W1uC2humBWupS2xEX8zFdSpNa8&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7138338069803992859&share_link_id=28d10f54-9636-4b01-818d-6510c94e17ae&share_app_id=1180&ugbiz_name=Account
*❉ 𝘍𝘰𝘭𝘭𝘰𝘸 𝘐𝘯𝘴𝘵𝘢𝘴𝘨𝘳𝘢𝘮 𝘉𝘰𝘵*
⫹⫺ https://Instagram.com/luxxyxyz

「𝘎𝘳𝘰𝘶𝘱 𝘉𝘰𝘵 𝘰𝘧𝘧𝘤𝘪𝘢𝘭  && 𝘎𝘳𝘰𝘶𝘱 𝘋𝘪𝘴𝘤𝘶𝘴𝘴𝘪𝘰𝘯」

_Group LuccyBot_
⫹⫺ https://chat.whatsapp.com/CIv0mTBUteK8zy7crxdOj7

𝘎𝘳𝘰𝘶𝘱 𝘋𝘪𝘴𝘤𝘶𝘴𝘴𝘪𝘰𝘯
⫹⫺ -

`
conn.sendButtonDoc(m.chat, jarot, wm,'Thanks','You', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/luxxyxyz",
    mediaType: "VIDEO",
    description: "https://Instagram.com/luxxyxyz", 
    title: 'Luccy-MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
}
} })
        }
handler.help = ['sosialmedia']
handler.tags = ['main','info']
handler.command = /^(sosial|media|sosialmedia)$/i
export default handler
