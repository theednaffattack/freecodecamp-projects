import * as ts from "typescript";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { myWriteFile } from "./write-file.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputFilePath = "../src/pages/js/drum_machine/main.ts";
const outputFilePath = "../src/pages/js/drum_machine/main.js";
// const sourceCode = `
// const test: number = 1 + 2;
// console.log(test);
// `;

let sourceCode = "";

try {
  sourceCode = fs.readFileSync(path.join(__dirname, inputFilePath), "utf8");
} catch (err) {
  console.error(err);
}

const transpileOptions: ts.TranspileOptions = {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES5,
  },
};

const result = ts.transpileModule(sourceCode, transpileOptions);
myWriteFile(path.join(__dirname, outputFilePath), result.outputText);
// Output will be the transpiled JavaScript string
