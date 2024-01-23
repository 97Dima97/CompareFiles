import fs from 'fs';
import readlineSync from 'readline-sync';

import { Command } from 'commander';
const program = new Command();

program
    .option('-s ', ' --start')
    .parse(process.argv)
const options = program.opts();

const path = readlineSync.question('', 'utf8');
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

const comparesFiles = () => {
    for (let i = 0; i < readingFirstFile.length; i++) {

        if (!options.s) {

            console.log('Для сравнения файлов укажите флаг "-s" ');
            return;
        }

        if (readingFirstFile.length === readingSecondFile.length && readingFirstFile[i] === readingSecondFile[i]) {

            console.log('Файлы одинаковые');
        }

        else {
            console.log('Файлы не одинаковые');
        }

    }

}

export default comparesFiles;



