//=============DENETH-MD SONG DOWNLOADER=================

const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    react: "🎧",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `‎‎*DENETH-MD SONG DOWNLOADER*

🎧 *Title* : ${data.title}
⏰ *Time* : ${data.timestamp}
📤 *Upload On* : ${data.ago}
🧐 *Views* : ${data.views}
‎
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ | ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ ʜᴀɴꜱᴀᴋᴀ ᴋᴇᴇʀᴛʜɪʀᴀᴛʜɴᴀ

Your Song Download Request Uploading Fallowing. You Can See File Audio Type And Document Type.`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:""},{quoted:mek})





}catch(e){
console.log(e)
reply(`${e}`)
}
})

//=============DENETH-MD Video Downloader=============

cmd({
    pattern: "video",
    desc: "download videos.",
    category: "download",
    react: "🎬",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `‎‎*DENETH-MD VIDEO DOWNLOADER*

🎧 *Title* : ${data.title}
⏰ *Time* : ${data.timestamp}
📤 *Upload On* : ${data.ago}
🧐 *Views* : ${data.views}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ | ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ ʜᴀɴꜱᴀᴋᴀ ᴋᴇᴇʀᴛʜɪʀᴀᴛʜɴᴀ
‎
Your Video Download Request Uploading Fallowing. You Can See File Video Type And Document Type.`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video+ document message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:""},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})
