const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/kaluthara";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "CR-GAMER"²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null.94763959164";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94763959164";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_39_05_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQwLFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjksXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAxLFxuICAgICAgICA5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICA3MixcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICA2MixcbiAgICAgICAgMjA4LFxuICAgICAgICA4MixcbiAgICAgICAgNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA3LFxuICAgICAgICA1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5LFxuICAgICAgICA0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzLFxuICAgICAgICA5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDcwLFxuICAgICAgICA0NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDkwLFxuICAgICAgICA5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaGpoUTB0SzhiT3FVdXFHczdEVlczMm9TeG5oNWxmYXR0cXYrWWN0Z0VFZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2Mzk1OTE2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTQwNEQyRjY5MDgxOTZENjI3RjMyNUY4MUU3RDc1NzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2MTExNTQ3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFROEEwdGM1UnJpMkVUcVNxMGhFZWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjYzNGEzMTItNzZiMS00ODg0LTlmNTAtNDM3Njk3YTg3NTgyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgMTI4LFxuICAgICAgMTcyLFxuICAgICAgMjA4LFxuICAgICAgOSxcbiAgICAgIDg0LFxuICAgICAgNzEsXG4gICAgICAxODksXG4gICAgICAxMTgsXG4gICAgICA5OCxcbiAgICAgIDIyNSxcbiAgICAgIDI2LFxuICAgICAgMjI2LFxuICAgICAgMjAxLFxuICAgICAgNzksXG4gICAgICAyMixcbiAgICAgIDgyLFxuICAgICAgMTY1LFxuICAgICAgNDYsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICA4OSxcbiAgICAgIDIzOSxcbiAgICAgIDExOSxcbiAgICAgIDEwMyxcbiAgICAgIDgxLFxuICAgICAgMTU2LFxuICAgICAgMTExLFxuICAgICAgMjAyLFxuICAgICAgMjAsXG4gICAgICAyMzksXG4gICAgICA0OCxcbiAgICAgIDE1OCxcbiAgICAgIDIwNCxcbiAgICAgIDYzLFxuICAgICAgMjE4LFxuICAgICAgMTk0LFxuICAgICAgNDMsXG4gICAgICAxNTIsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNThHMjU1UkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYzOTU5MTY0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQyOTQ1NzQ3MTI0MjkzOjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiS2FseWFuaSDwn5KX8J+YmFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01TUm91VUJFTEtScDdJR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidXRiOVM3NkdLWWhYalhEb3loVk9QSXZyZEVsK2ZvQ0VKY1hqRW1uYzhIMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXZUpCM3Q2N2hyWWdPS3FLemRjNHJLS1NaL1grc0o1SEFpVlJQYUtLdVIzczd3MTIyckp4bVdSOU9XU2tpNGY3YTZKd0hnNHZMS242azdEY093Nk5CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxSVBEUFZIM3NXbTRZMWpseTFYN0xsY0IrUlZDRnhtSGVSaWJ0NVl1b1hmeDk1YXVIWmc0OVhBQVRaOCtjOElkQjRDQWdSQStacTVGcTFwK3MvallDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2Mzk1OTE2NDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MTExNTQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkFRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGQVEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIVzNiT1pmNzhnVFZuaFg1cFBwalpRUzNwcGZvZlZrUzBKWENVVGtrN3JnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ4MDgwNzEwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "CR-GAMER",
  ownername:process.env.OWNER_NAME|| "CR-GAMER",


  errorChat : process.env.ERROR_CHAT || "true",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
