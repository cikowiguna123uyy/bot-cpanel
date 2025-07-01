require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "62895321822163"
global.namaowner = "𝐌𝐈𝐍𝐙 𝐇𝐎𝐒𝐓𝐈𝐍𝐆🎗"
global.namaowner2 = "𝐌𝐈𝐍𝐙 𝐇𝐎𝐒𝐓𝐈𝐍𝐆🎭"
//======== Setting Bot & Link ========//
global.namabot = "Creater Panel" 
global.namabot2 = "Creater Panel"
global.version = "v2.0"
global.foother = "Created By 𝐌𝐈𝐍𝐙 𝐇𝐎𝐒𝐓𝐈𝐍𝐆"
global.packname = "Created By 𝐌𝐈𝐍𝐙 𝐇𝐎𝐒𝐓𝐈𝐍𝐆"
global.author = "Xyro Nesia"
//========== Setting Foto ===========//
global.imgreply = "https://files.catbox.moe/wi5uj3.jpg"
global.imgmenu = fs.readFileSync("./media/Menu.jpg")
global.imgslide = "https://files.catbox.moe/wi5uj3.jpg"
global.imgpanel = fs.readFileSync("./media/Panel.jpg")
//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://www.freezee.biz.id"
global.apikey = "ptla_h2eHGg16twZGgXQdyhztj5YdFIyJ63vRfCwIvCpfu9D" //ptla
global.capikey = "ptlc_3PvlYN101sQSgVggIuWUDLKpeUKGo9NpLFNFiZIusAa" //ptlc
//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Owner Bot", 
"developer": "Command Ini Hanya Untuk Developer Bot!"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})