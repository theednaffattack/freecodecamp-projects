var input = document.querySelector("#markdown-input");
var htmlOutput = document.querySelector("#html-output");
var htmlPreview = document.querySelector("#preview");
var errorText = document.querySelector("#error-text");
if (!input) {
    errorText.textContent = "Cannot sense input!";
}
else {
    input.addEventListener("input", updateValue);
}
function updateValue(e) {
    if (htmlPreview && htmlOutput && e.currentTarget) {
        var html = convertMarkdown();
        htmlOutput.textContent = html;
        htmlPreview.innerHTML = html;
    }
}
function convertMarkdown() {
    var regex = {
        h1: /^# (.*$)/gim,
        h2: /^## (.*$)/gim,
        h3: /^### (.*$)/gim,
        boldText: /\*\*(.*)\*\*/gim,
        boldText2: /\_\_(.*)\_\_/gim,
        br: /\n$/gim,
        italicText: /\*(.*)\*/gim,
        italicText2: /\_(.*)\_/gim,
        strikeThrough: /~~(.+?)~~/gim,
        inlineCode: /`(.+?)`/gim,
        unorderedList: /^\s*[-+*]\s+(.+)$/gim,
        orderedList: /^\s*\d+\.\s+(.+)$/gim,
        blockQuote: /^>\s*(.+)$/gim,
        codeBlock: /^```(?:\s*(\w+))?([\s\S]*?)^```$gim/,
        links: /\[(.*?)\]\((.*?)\s?(?:"(.*?)")?\)/gim,
        images: /!\[(.*?)\]\((.*?)\s?(?:"(.*?)")?\)/gim,
    };
    var htmlText = "";
    if (input) {
        htmlText = input.value
            .replace(regex.h1, "<h1>$1</h1>")
            .replace(regex.h2, "<h2>$1</h2>")
            .replace(regex.h3, "<h3>$1</h3>")
            .replace(regex.blockQuote, "<blockquote>$1</blockquote>")
            .replace(regex.br, "<br />")
            .replace(regex.codeBlock, "<code>$1</code>")
            .replace(regex.boldText, "<strong>$1</strong>")
            .replace(regex.boldText2, "<strong>$1</strong>")
            .replace(regex.images, "<img alt='$1' src='$2' />")
            .replace(regex.links, "<a href='$2'>$1</a>")
            .replace(regex.italicText, "<em>$1</em>")
            .replace(regex.italicText2, "<em>$1</em>");
    }
    return htmlText;
}
