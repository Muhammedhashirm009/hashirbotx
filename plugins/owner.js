const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://user-images.githubusercontent.com/87589712/129968092-cd718847-1f1f-42ee-a97d-4a6dcd3f7dd5.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Creater Muhammed Hashir*
*SYSTEM UPDATING*

*Owner number wa.me/919037072660*

*githublink       https://github.com/Muhammedhashirm009/hashirbotx*

*audio commads    https://github.com/Muhammedhashirm009/hashirbotx/tree/master/uploads*

*sticker commads  https://github.com/Muhammedhashirm009/hashirbotx/tree/master/stickers*
`}) 

}));
