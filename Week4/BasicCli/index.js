import { Command } from "commander";
import fs from "fs";

const program = new Command(); // Corrected variable name

program
    .name("mycli")
    .description("This is my first CLI")
    .version("1.0.0");

program
    .command("count_word")
    .description("Count the number of words in a file")
    .argument("<file>", "File to count the number of words")
    .action((file) => {
        fs.readFile(file, "utf-8", function (err, data) {
            if (err) {
                console.error(err);
            } else {
                const words = data.split(/\s+/).filter(word => word.length > 0);
                console.log(`The number of words in the file is ${words.length}`);
            }
        });
    });

program.parse();
