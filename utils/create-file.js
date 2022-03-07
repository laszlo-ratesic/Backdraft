const fs = require('fs');
const gradient = require('gradient-string');

const writeFile = (fileData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileData, (err) => {
            console.log(gradient.instagram("Writing team data to file..."))
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: `
   /$$$$$$  /$$   /$$  /$$$$$$   /$$$$$$  /$$$$$$$$  /$$$$$$   /$$$$$$  /$$
  /$$__  $$| $$  | $$ /$$__  $$ /$$__  $$| $$_____/ /$$__  $$ /$$__  $$| $$
 | $$  \\__/| $$  | $$| $$  \\__/| $$  \\__/| $$      | $$  \\__/| $$  \\__/| $$
 |  $$$$$$ | $$  | $$| $$      | $$      | $$$$$   |  $$$$$$ |  $$$$$$ | $$
  \\____  $$| $$  | $$| $$      | $$      | $$__/    \\____  $$ \\____  $$|__/       |
  /$$  \\ $$| $$  | $$| $$    $$| $$    $$| $$       /$$  \\ $$ /$$  \\ $$           |.===.
 |  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/| $$$$$$$$|  $$$$$$/|  $$$$$$/ /$$          {}o o{}
  \\______/  \\______/  \\______/  \\______/ |________/ \\______/  \\______/ |__/ ooO--(_)--Ooo-
                `
            });
        })
    })
}

module.exports = writeFile;