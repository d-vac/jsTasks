const {readFileSync} = require("fs");

let regexp = new RegExp(process.argv[2]);

function regexFileFinder(file) {
    if (regExp.test(readFileSync(file, "utf8"))) {
        console.log(file);
    }
}

for (let arg of process.argv.slice(3)) {
    regexFileFinder(arg);
}
