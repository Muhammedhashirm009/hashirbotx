/* Copyright (C) 2021 MIKHAIEL

Licensed under the GPL-3.0 License;you may not use this file except in compliance with the License.

Coded By - Mikhaiel*/

const Asena = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   Asena.addCommand({pattern: 'apkmod', fromMe: true}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 🍃 ```APK COMMANDS``` 🍃 〙\n┗━━━━━━━━━━━━━━━━━━━\n🍁 Applications Full️ 🍁\n┠⊷ 🎋 ```Nova Launcher```:\n     ```.nova```\n\n┠⊷️ 🎋 ```INSHOT```:\n     ```.inshot```\n\n┠⊷️ 🎋 ```VN EDITOR```:\n     ```.vn```\n\n┠ 🎋 ```Kinemaster```:\n     ```.kinemaster```\n\n┠⊷️ 🎋 ```Alight Motion```:\n     ```.alight```\n\n┠⊷️ 🎋 ```Picsart Gold```:\n     ```.picsart```\n\n┠⊷️ 🎋 ```Canva Pro```:\n     ```.canva```\n\n┠⊷️ 🎋 ```Light Room```:\n     ```.light```\n\n┠⊷️ 🎋 ```Photoshop```:\n     ```.pshop```\n\n┠⊷️ 🎋 ```Snapseed```:\n     ```.snapseed```\n\n┠⊷️ 🎋 ```Sloid Explorer```:\n     ```.explore```\n\n┠⊷️ 🎋 ```Youtube Vanced```:\n     ```.youtube```\n\n┠⊷️ 🎋 ```Mx Player Pro```:\n     ```.mxpro```\n\n┠⊷️ 🎋 ```Power Amp```:\n     ```.amp```\n\n┠⊷️ 🎋 ```Spotify Music```:\n     ```.spotify```\n\n┠⊷️ 🎋 ```Express VPN```:\n     ```.xpress```\n\n┠⊷️ 🎋 ```Screen Recorder```:\n     ```.recorder```\n\n┠⊷️ 🎋 ```Request```:\n     ```.request```\n\n\n:┏━━━━━━━━━━━━━━━━━━━\n  ```🍃 © Jimbrootan 🍃``` 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));

   Asena.addCommand({pattern: 'fatp', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));

   Asena.addCommand({pattern: 'nova', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```NOVA LAUNCHER``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/19');
   }));

   Asena.addCommand({pattern: 'inshot', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```IN SHOT 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/15');
   }));

   Asena.addCommand({pattern: 'vn', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```VN Video Editor``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/14');
   }));

   Asena.addCommand({pattern: 'kinemaster', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```KINEMASTER MOD``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/21');
   }));
   
   Asena.addCommand({pattern: 'alight', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```ALIGHT MOTION MOD``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/21');
   }));
   
   Asena.addCommand({pattern: 'picsart', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```PICSART GOLD``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/23');
   }));

   Asena.addCommand({pattern: 'canva', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```CANVA PRO``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/24');
   }));

   Asena.addCommand({pattern: 'light', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```LIGTHROOM``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/25');
   }));

   Asena.addCommand({pattern: 'pshop', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```PHOTOSHOP EXPRESS``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/26');
   }));

   Asena.addCommand({pattern: 'snaps', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```SNAPSEED``` 🎀\n🛡️ premium unlocked.\n📌 https://t.me/Mod_Fam/28');
   }));

   Asena.addCommand({pattern: 'explorer', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```SOLID EXPLORER``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/30');
   }));

   Asena.addCommand({pattern: 'youtube', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```YOUTUBE VANCED``` 🎀\n🛡️ YouTube Premium  YouTube Music.\n⭕ https://vancedapp.com');
   }));
   
   Asena.addCommand({pattern: 'mxpro', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```MX PLAYER PRO``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/43');
   }));

   Asena.addCommand({pattern: 'amp', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```POWERAMP``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/41');
   }));

   Asena.addCommand({pattern: 'spotify', fromMe: false}, (async (message, match) => {
      await message.sendMessage('🎀 ```Spotify Music``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/40');
   }));

   Asena.addCommand({pattern: 'xpress', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```EXPRESS VPN``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/8');
   }));
   
   Asena.addCommand({pattern: 'recorder', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```SCREEN RECORDER``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/38');
   }));

   Asena.addCommand({pattern: 'request', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```Request Mod apk``` 🎀\n🛡️ wa.me/+919544846609 \n🍃 https://t.me/Mikhaiel_Offical');
   }));
}

else if (Config.WORKTYPE == 'public') {

   Asena.addCommand({pattern: 'apkmod', fromMe: false}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 🍃 ```APK COMANDOS``` 🍃 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ 🎋 ```Nova Launcher```:\n     ```.nova```\n\n┠⊷️ 🎋 ```IN SHOT```:\n     ```.inshot```\n\n┠⊷️ 🎋 ```VN EDITOR```:\n     ```.vn```\n\n\n┠ 🎋 ```Kinemaster```:\n     ```.kinemaster```\n\n┠⊷️ 🎋 ```Alight Motion```:\n     ```.alight```\n\n┠⊷️ 🎋 ```Picsart Gold```:\n     ```.picsart```\n\n┠⊷️ 🎋 ```Canva Pro```:\n     ```.canva```\n\n┠⊷️ 🎋 ```Light Room```:\n     ```.light```\n\n┠⊷️ 🎋 ```Photoshop```:\n     ```.pshop```\n\n┠⊷️ 🎋 ```Snapseed```:\n     ```.snapseed```\n\n\n┠⊷️ 🎋 ```Sloid Explorer```:\n     ```.explore```\n\n┠⊷️ 🎋 ```Youtube Vanced```:\n     ```.youtube```\n\n┠⊷️ 🎋 ```Mx Player Pro```:\n     ```.mxpro```\n\n┠⊷️ 🎋 ```Power Amp```:\n     ```.amp```\n\n┠⊷️ 🎋 ```Spotify Music```:\n     ```.spotify```\n\n┠⊷️ 🎋 ```Express VPN```:\n     ```.xpress```\n\n┠⊷️ 🎋 ```Screen Recorder```:\n     ```.recorder```\n\n┠⊷️ 🎋 ```Request```:\n     ```.request```\n\n\n:┏━━━━━━━━━━━━━━━━━━━\n  ```🍃 © Jimbrootan 🍃``` 🍁\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));
    
   Asena.addCommand({pattern: 'fatp', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));

   	Asena.addCommand({pattern: 'nova', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```NOVA LAUNCHER``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/19');
   }));

   Asena.addCommand({pattern: 'inshot', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```IN SHOT 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/15');
   }));

   Asena.addCommand({pattern: 'vn', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```VN Video Editor``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/14');
   }));

   Asena.addCommand({pattern: 'kinemaster', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```KINEMASTER MOD``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/21');
   }));
   
   Asena.addCommand({pattern: 'alight', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```ALIGHT MOTION MOD``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/21');
   }));
   
   Asena.addCommand({pattern: 'picsart', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```PICSART GOLD``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/23');
   }));

   Asena.addCommand({pattern: 'canva', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```CANVA PRO``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/24');
   }));

   Asena.addCommand({pattern: 'lightr', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 *LIGTHROM* 🎀\n🛡️ premium unlocked.\n📌 https://t.me/Mod_Fam/25');
   }));

   Asena.addCommand({pattern: 'pshop', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```PHOTOSHOP EXPRESS``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/26');
   }));

   Asena.addCommand({pattern: 'snaps', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```SNAPSEED``` 🎀\n🛡️ premium unlocked.\n📌 https://t.me/Mod_Fam/28');
   }));

   Asena.addCommand({pattern: 'explorer', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```SOLID EXPLORER``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/30');
   }));

   Asena.addCommand({pattern: 'youtube', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```YOUTUBE VANCED``` 🎀\n🛡️ YouTub Premium  YouTube Music.\n⭕ https://vancedapp.com');
   }));
   
   Asena.addCommand({pattern: 'mxpro', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```MX PLAYER PRO``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/43');
   }));

   Asena.addCommand({pattern: 'amp', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```POWERAMP``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/41');
   }));

   Asena.addCommand({pattern: 'spotify', fromMe: false}, (async (message, match) => {
      await message.sendMessage('🎀 ```Spotify Music``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/40');
   }));

   Asena.addCommand({pattern: 'xpress', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```EXPRESS VPN``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/8');
   }));
   
   Asena.addCommand({pattern: 'screen recorder', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```SCREEN RECORDER``` 🎀\n🛡️ premium unlocked.\n⭕ https://t.me/Mod_Fam/38');
   }));

   Asena.addCommand({pattern: 'request', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🎀 ```Request Mod apk``` 🎀\n🛡️ wa.me/+919544846609 \n🍃 https://t.me/Mikhaiel_Offical');
   }));
}
