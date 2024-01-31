import fs from 'fs';
import { Command } from 'commander';

const program = new Command();
const compareFiles = (yourapp1, yourapp2) => {
    let name = `${yourapp1} ${yourapp2}`;
    const s = name.split(' ')
    const readingFirstFile = fs.readFileSync(s[0], 'utf8', (err, data) => {

        if (err) {
            console.error(err);
        }

        console.log(data);
    });

    const readingSecondFile = fs.readFileSync(s[1], 'utf8', (err, data) => {

        if (err) {
            console.error(err);
        }

        console.log(data);
    });

    for (let i = 0; i < readingFirstFile.length; i++) {

        if (readingFirstFile.length === readingSecondFile.length && readingFirstFile[i] === readingSecondFile[i]) {
            return console.log('Файлы одинаковые');
        }

        else {
            return console.log('Файлы не одинаковые');
        }
    }
}

program
    .arguments('<yourapp1> <yourapp2>')
    .option('--h', 'help')
    .action(compareFiles)
    .parse(process.argv);

if (program.h) {
    console.log(program.help);
}

export default compareFiles;
