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
                message: "Markup file create!"
            });
        });
    });
};

module.exports = { writeFile };