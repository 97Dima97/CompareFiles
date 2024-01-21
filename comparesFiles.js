const fs = require('fs');
const readlineSync = require('readline-sync');

const path = readlineSync.question('Укажите пути к файлам через пробел:  ', 'utf8');
let filePath = path.split(' ');

const readingFirstFile = fs.readFileSync(filePath[0], 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

const readingSecondFile = fs.readFileSync(filePath[1], 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);

});

for (let i = 0; i < readingFirstFile.length; i++) {

    if (readingFirstFile.length === readingSecondFile.length && readingFirstFile[i] === readingSecondFile[i]) {

        return console.log('Файлы одинаковые');
    }

    return console.log('Файлы не одинаковые');
}



