const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Colombo,sri lanka "


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Dumundu:sandaras@cluster0.8wh3s1n.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "CR-GAMER"²²¹-ᴍᴅ" 


global.devs = "94763959164" // Developer Contact
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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_26_05_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI4LFxuICAgICAgICA4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDkwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODksXG4gICAgICAgIDExNixcbiAgICAgICAgMjUyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OCxcbiAgICAgICAgMCxcbiAgICAgICAgODksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzNlhmak1xL21qVHdqS3FIc2Q4RDJsczBsV2FZWXBuU1FOSTVzbHowNmZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzYzOTU5MTY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJERUE2N0IzRDBFMTBEODMyN0NFQzc2NUZFNkFFRkY0OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYxNDMxNThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNXNtcU9SZ0hRdU94Zl84X1g0QURHQVwiLFxuICBcInBob25lSWRcIjogXCJhMmY4OTVjMi0wY2FlLTQ4ZWYtYTc4NC03NWM5ZThlMmYxMDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgOTIsXG4gICAgICAxNzUsXG4gICAgICA3OCxcbiAgICAgIDE3LFxuICAgICAgMTk5LFxuICAgICAgMjI5LFxuICAgICAgODYsXG4gICAgICAxMixcbiAgICAgIDIxMyxcbiAgICAgIDk4LFxuICAgICAgMTkyLFxuICAgICAgNzksXG4gICAgICAyMzIsXG4gICAgICA1NyxcbiAgICAgIDYyLFxuICAgICAgMTg0LFxuICAgICAgNzksXG4gICAgICAyNTAsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAxOTIsXG4gICAgICAyMjUsXG4gICAgICA1MCxcbiAgICAgIDg4LFxuICAgICAgNjksXG4gICAgICAyMixcbiAgICAgIDE4MSxcbiAgICAgIDM4LFxuICAgICAgMTEzLFxuICAgICAgMzksXG4gICAgICAyMzQsXG4gICAgICAxMjksXG4gICAgICA1MyxcbiAgICAgIDc3LFxuICAgICAgMTE5LFxuICAgICAgMTIxLFxuICAgICAgNyxcbiAgICAgIDIwNyxcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQxNDZUSFFIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2Mzk1OTE2NDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0Mjk0NTc0NzEyNDI5Mzo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkthbHlhbmkg8J+Sl/CfmJhcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYVJvdVVCRUs2SXFiSUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInV0YjlTNzZHS1loWGpYRG95aFZPUEl2cmRFbCtmb0NFSmNYakVtbmM4SDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSzBUTXdwR1I3WERldkhaUTkxSTZyNSs2WTAzUWJNczVnK0xnOGIveFJ3UTNCZHE3RFY0YUZXSGJjV2FqYy9yelQzd0MzSGIwOGlRekdHNDloclRwRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia0NqY3NkNklEWDQzVTlsTGlJT3NiUDliczZ6K08yR1dsS0VHUS9VdEpSWTA0TmlWSDllNWdoMzZSY05LVE9Cakh1YWpIK3RvQmN5UlNUYWJWbnN0aGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjM5NTkxNjQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjE0MzE1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZBUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkFRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSFczYk9aZjc4Z1RWbmhYNXBQcGpaUVMzcHBmb2ZWa1MwSlhDVVRrazdyZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0ODA4MDcxMDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==", // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "SL DUMIYA" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "SL DUMIYA",
  packname: process.env.PACK_NAME || "❤",
  botname : process.env.BOT_NAME  || "SL DUMIYA",
  ownername:process.env.OWNER_NAME|| "SL DUMIYA",


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
