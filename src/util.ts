function getHtmlEntryFiles(srcDir: string) {
  const entry: { [key: string]: string } = {};

  function traverseDir(currentDir: string) {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const isDirectory = fs.statSync(filePath).isDirectory();
      if (isDirectory) {
        // If it's a directory, recursively traverse it
        traverseDir(filePath);
      } else if (path.extname(file) === ".html") {
        // If it's an HTML file, add it to the entry object
        const name = path.relative(srcDir, filePath).replace(/\..*$/, "");

        const noIndex = name.replace("/index", "");

        const myPath = noIndex.replace(/\/$/, "").split("/").pop();
        entry.main = resolve(__dirname, "index.html");

        entry[myPath] = resolve(__dirname, `src/${name}.html`); // filePath;
        log("entry", entry);
        log("myPath", myPath);
      }
    });
  }

  traverseDir(srcDir);

  entry.main = resolve(__dirname, "index.html");
  return entry;
}
