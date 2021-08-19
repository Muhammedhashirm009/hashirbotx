/* Copyright (C) 2020 Mikhaiel

WhatsAsena - Yusuf Usta	

*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM != false ? Config.DISBGM.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false }, (async (message, match) => {
    if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919544846609@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['Happy Onam','Independence Day','admin','ariyo','ariyam','Ariyilla','Corona','Fun','hacker','.help','online','mm','poda','Bot Remove','onnu nirth','stop','Theapp','Subscribe','song','Njan','pottum','work alla','endi','You Must Reply','Smile','engane und','Malayalam para','sugam anno','sugalle','Good Night','Top Up','thada','Acting','Girls undo','Nalladha','music','pediya','on','onn','od','nyt','Kakka','machu','ma','Di','tholvi','thyr','urang','voice','thech','tharuo','thamasha','thaa','sthalam','sorry','sed','sed bgm','save','remove','recharge','Pwoli','poyo','Povano','pova','post','Pora','poli','Poda','paatt','oorma','oomb','offer','noob','njn anu','name entha','nallatha','myr','Mwol','mrng','Morning','Mass','malayalam','Love','kunda','Kozhu','kitti','call','waiting','Uff','wait','ya','mindanda','Lala','Love','list','patti','para','pic','aloo','ayilla','ban','bie','Bro','by','Di','Dj','ee','enth patti','Fek','Gd night','Ha','register','class','k','Kakka','welcome','thottu','Aliya','Aliyo','Aysheri','Call','Chaya','Corona','Cr7','Error','Exam potti','Fuck','Gd nyt','Goal','Gud nyt','HB DAY','HBD','Happy Birthday','Help','Hi','Hmm','Hy','Jimbrootan','Life','Line','Loo','Look','Mmm','Oru doubt','Seth po','Single','Welcome','aara','alive','bot','chill','enik pediya','ennitt','entha','exam','good night','group','grp','ha','hacker','he he','helo','kandatha','line','manasilayo','mention','samshayam','save','thech','git','vedi','Subscribe','Thall','Tea','Ok','neymar','poda myre','Mrng','fud','thanks','M','myr','ayin','Aliya','hello','spam','Ooi','.mute','.unmute','umma','Sheri aakum','Shalyam','mood','meow','Left','http','Eee','ara','Hmm','Ya','Yes','Ys','uyir','Va','evide und','evane entha cheyuka','arum ille','Ayin','Mikhaiel']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/${a.toLowerCase()}.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
    }
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.BGM == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919544646609@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['Happy Onam','admin','Independence Day','ariyo','ariyam','Ariyilla','Corona','Fun','hacker','.help','online','mm','poda','Bot Remove','onnu nirth','stop','Theapp','Subscribe','song','Njan','pottum','work alla','endi','You Must Reply','Smile','engane und','Malayalam para','sugam anno','sugalle','Good Night','Top Up','thada','Acting','Girls undo','Nalladha','music','pediya','on','onn','od','nyt','Kakka','machu','ma','Di','tholvi','thyr','urang','voice','thech','tharuo','thamasha','thaa','sthalam','sorry','sed','sed bgm','save','remove','recharge','Pwoli','poyo','Povano','pova','post','Pora','poli','Poda','paatt','oorma','oomb','offer','noob','njn anu','name entha','nallatha','myr','Mwol','mrng','Morning','Mass','malayalam','Love','kunda','Kozhu','kitti','call','waiting','Uff','wait','ya','mindanda','Lala','Love','list','patti','para','pic','aloo','ayilla','ban','bie','Bro','by','Di','Dj','ee','enth patti','Fek','Gd night','Ha','register','class','k','Kakka','welcome','thottu','Aliya','Aliyo','Aysheri','Call','Chaya','Corona','Cr7','Error','Exam potti','Fuck','Gd nyt','Goal','Gud nyt','HB DAY','HBD','Happy Birthday','Help','Hi','Hmm','Hy','Jimbrootan','Life','Line','Loo','Look','Mmm','Oru doubt','Seth po','Single','Welcome','aara','alive','bot','chill','enik pediya','ennitt','entha','exam','good night','group','grp','ha','hacker','he he','helo','kandatha','line','manasilayo','mention','samshayam','save','thech','git','vedi','Subscribe','Thall','Tea','Ok','neymar','poda myre','Mrng','fud','thanks','M','myr','ayin','Aliya','hello','spam','Ooi','.mute','.unmute','umma','Sheri aakum','Shalyam','mood','meow','Left','http','Eee','ara','Hmm','Ya','Yes','Ys','uyir','Va','evide und','evane entha cheyuka','arum ille','Ayin','Mikhaiel']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/${a.toLowerCase()}.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.BGM == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919544846609@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./upload/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['Happy Onam','gd ngt','gdmng','group','Loveu','lub','lucifer','mindalle','mindathe','Nirthada','Pwoli','rashmika','thayirmulak','alone','ayn','chunke','chunks','Chunkz','colony','come on','comedy','control','corona','Cr7 back','Cr7','criminal','Criz','Cry','da','Daaa','Dai','delete','devadha','devil','dialogue','die','died','divasam','Don','Dora','Dovp','e','eda','Edger','Edi','ego','ejathi','ekk','Ellarum','En nenjil','endi','Enjoy','ennitt','enta aduth ninu poyko','Ente','Entertain','enth patti','enth','entha','Enthada','Enthupatti','Entry bgm','errikum','evde','evide','Exam','Eyy','Fake','fans','fd','Feel aayi','Fek','Fine','first','free','fresh','friend','Frnd','Fsq','Fuck','Game','Gd mng','gd n8','Gd ngt','Gd nyt','gdmng','gdngt','ghost','glamour','Goal','good bye','Good morning','good night','Group power','group','ha','hack','Halo','Hambada','Happy bday','happy','hate','Haters','Haters','Hbd','hbday','hehe','Helo','help','hero','hi','Hii','Hlo','hloo','Hy','i am back','I am in love','Iblees','Idi','ijathi','Ikkachi','INR','ithara','Ithetha','Iyyo','Janapriyanaykan','jd','job','Jocker','Ka','kadhal','Kadhali','kali','kallip','kalyanam','kanja','Kanjan','Kanjav','kannanoo','kar98','Kazha','kazhicha','kazhik','kazhingh','kazhiyumoo','kaztro','kenzo','Kenzoo','kerivaa','ketta','Kevin',',Kgf','Kick','kidanno','killadi','king','kiss','kittila','Kollam','kollanam','Kooi','kozhi','kshemikanam','kudi poyo','kukku','kumbasarikan','kunda','kunda','Kunju','kunna','Kurup','kuthirappavan','Kutty','La be','lahari','Lala','Left','Legend','Leopucha','life','like','line','lo','lokam','lol','Love tune','love u','Love','lover','Loveu','lucifer','macha','machan','Mad','makeup','makkalay','Malang','manasilayo','manath','mandan','Mark','marriage','mass bgm','Mass','matam','mathi','may i','Meeting','mention','messi','mier','1 vs 1 vada','1','mindalle','mindathe','mine','missing','mm','mohabath','Mohanlal','monjan','mood','moodesh','moonji','morning','munb','munji','Music pranthan','music','muth','muttikoo','mwoolusey','my area','My love','mybos','mylove','myr','myre','nadakunathu','Nalla kutty','Nallakutti','nallath','name entha','Name','nan','nanayikoode','nanban','Nanbiye','Nandhana','Nanni','nayintta','ne arada','neymar','Neymer','night','ninak okhay','ninghal','Ninne kond','Ninne','nirth','nirthada','Nishal','Nissaram','njan','Njn vera','njn','Njnum niyum','Njr','noob','nth parayan','nthoo','nyayam','O','Oh no','oh','ok bei','Ok bye','ok da','Ok','Omb','Omg','onnu poda','onnum arriyilla','Oo','oompi','orumich','over','paad','paatt','Paavam','padakam','padakam','padakanghal','padicho','Padip','padipikaan','Pala shaji','Pandaram','pani','parayalada','parayatt','parayatte','parayum','pashu','Patikkalle','patti','Pattula','pedi','penninay','per','perfect ok','Pikachu','Pinnallah','Pm','po','Poda patti','poda','podi','Poli','polika','poo','Poompatta gunda','poora','Pora','pott','Potta','pottan','Potte','pova','povey','Power varate','power','Poweresh','poyi','poyittund','pranayam','prayojanam','Prefect ok','preshnam','pro','Psycho','Pubg','pvr','Pwoli','rakshasi','Ramos','range','rascal','rashmika','rasool','Re entry','Ready','rekshikaan','remove','Repost','return','Rip','Rose','Rowdy','Rules','Sahva','saji','samayam','sankadam varunundo','sarasu','sathyam','Sayip','sayma','scene','sed akhi','sed bgm','sed','Senior','Serious','set aano','set anoo','Seth po','setta','shavam','Show','shri','Silence','simham','singam','Singapenne','single','sis','sketched','Smile','sneham','snehikunnu','Soldier','song','sorry','Sry','subscribe','sukshich','sulthan','Super','support','Tentacion','test','Tha','Thala','pever','pewer','Pha','photo','Thalapathy','thall','thallu','thamasha','Thantha','thayirmulak','thayoli','theri','thoomanghil','thoonivasam','thot','thottu','thug','Town','Track maat','trance','Tuttu','tym','uff','umma','undakanne','uranghadi','uyir','Va','vaa','vaasu','vada','Vali','vanda','vandada','vann','varava','varka pani','Vava','Veeran','vellathum','venda nee','venda','verithanam','video','Vidhi','vidu','vilichaal','vimanam','virthi kettavanay','vishamam','waiting','waiting','Warning','Welcome','why','wow','yannallum','yannay','you','Z aayi','💪','🤣',]
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/${a.toLowerCase()}.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.AUTOSTICKER){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '919544846609@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./stickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Error','Jimbrootan','Hi','Bye','Muthe','Police','Teach','Thech','Z','aayo','alla','anthas','ayin','aysheri','bie','bye','chathu','cheyalle','chunk','committed','mama','marichu','mention','mood','muthe','myre','njan','number','ok','oombi','ooo','pedicho','pidi','poweresh','sad','saved','sed','shaad','shut','teach','test','thech','think','thund','umma','uyir','vannu','vibe','z','dead','JulieMwol','Like','pever','sry','night','indo','uff','eh','poyi','scene','killadi','nee alle','sheri','vada','poocha','morning','pm','thund','remove','Sed','araa','Da','madthu','Hlo','air','Bomb','Julie','myr','fan','charge',]
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
}
