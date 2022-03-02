const fs = require('fs');

const writeFile = (fileData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileData, (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: `
                .-:::::'::: :::    .,::::::
                ;;;'''' ;;; ;;;    ;;;;''''
                [[[,,== [[[ [[[     [[cccc
                '$$$"'' $$$ $$'     $$""""
                 888    888o88oo,.__888oo,__
                 "MM,   MMM""""YUMMM""""YUMMM

    .,-::::: :::::::..  .,::::::   :::. ::::::::::::.,:::::::::::::-.
,;;;'''''' ;;;;'';;;; ;;;;''''   ;;';;;;;;;;;;'''';;;;'''' ;;,   '';,
[[[         [[[,/[[['  [[cccc   ,[[ '[[,   [[      [[cccc  '[[     [[
$$$         $$$$$$c    $$""""  c$$$cc$$$c  $$      $$""""   $$,    $$
'88bo,__,o, 888b "88bo,888oo,__ 888   888, 88,     888oo,__ 888_,o8P'
    "YUMMMMMP"MMMM   "W" """"YUMMMYMM   ""'  MMM     """"YUMMMMMMMP"
                `
            });
        })
    })
}

module.exports = writeFile;