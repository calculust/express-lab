const path = require('path');
const fs = require('fs');

const SUBMISSIONS_PATH = path.join(__dirname, '../data/submissions.json');

function getAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(SUBMISSIONS_PATH, (err, data) => {
            if (err) {
                reject(err);
            } else {
                const parsed = JSON.parse(data);
                resolve(parsed);
            }
        });
    });
}

function writeNew(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(SUBMISSIONS_PATH, JSON.stringify(data, null, 4), (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('added');
            }
        });
    });    
}

module.exports = {
    getAll,
    writeNew
}