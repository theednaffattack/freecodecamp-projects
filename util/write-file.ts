import fs from "fs";

export function myWriteFile(filePath: string, fileContents: string) {
  try {
    fs.writeFileSync(filePath, fileContents);
  } catch (err) {
    console.error(err);
  }
}
