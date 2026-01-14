var displayElem = document.getElementById("display");
var clips = document.querySelectorAll(".clip");
var buttons = document.querySelectorAll(".drum-pad");
var clipObj = {};
clips.forEach(function (item) {
    clipObj["".concat(item.id)] = item;
});
document.addEventListener("keydown", function (event) {
    event.preventDefault();
    // Display the key pressed
    if (displayElem instanceof HTMLParagraphElement) {
        displayElem.textContent = event.key.toUpperCase();
    }
    switch (event.key.toUpperCase()) {
        case "Q": {
            var clip = Array.from(clips).find(function (node) { return node.id === "Q"; });
            if (clip) {
                clip.currentTime = 0;
                clip.play();
            }
            break;
        }
        case "W": {
            var clip = Array.from(clips).find(function (node) { return node.id === "W"; });
            if (clip) {
                clip.currentTime = 0;
                clip.play();
            }
            break;
        }
        case "E": {
            var clip = Array.from(clips).find(function (node) { return node.id === "E"; });
            if (clip) {
                clip.currentTime = 0;
                clip.play();
            }
            break;
        }
        case "A": {
            var clip = Array.from(clips).find(function (node) { return node.id === "A"; });
            if (clip) {
                clip.currentTime = 0;
                clip.play();
            }
            break;
        }
        case "S": {
            var clip = Array.from(clips).find(function (node) { return node.id === "S"; });
            if (clip) {
                clip.currentTime = 0;
                clip.play();
            }
            break;
        }
        case "D": {
            var clip = Array.from(clips).find(function (node) { return node.id === "D"; });
            if (clip) {
                clip.currentTime = 0;
                clip.play();
            }
            break;
        }
        case "Z": {
            var clip = Array.from(clips).find(function (node) { return node.id === "Z"; });
            if (clip) {
                clip.currentTime = 0;
                clip.play();
            }
            break;
        }
        case "X": {
            var clip = Array.from(clips).find(function (node) { return node.id === "X"; });
            if (clip) {
                clip.currentTime = 0;
                clip.play();
            }
            break;
        }
        case "C": {
            var clip = Array.from(clips).find(function (node) { return node.id === "C"; });
            if (clip) {
                clip.currentTime = 0;
                clip.play();
            }
            break;
        }
        default:
            break;
    }
});
function playAudio(ref) {
    clipObj[ref].play();
}
function clickFn(evt) {
    evt.preventDefault();
    var elem = evt.target;
    if (elem.innerText && displayElem) {
        displayElem.textContent = elem.innerText;
        playAudio(elem.innerText);
    }
}
for (var index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", clickFn);
}
