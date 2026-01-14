const displayElem = document.getElementById("display");

const clips = document.querySelectorAll<HTMLAudioElement>(".clip");
const buttons = document.querySelectorAll<HTMLDivElement>(".drum-pad");

const clipObj: { [key: string]: HTMLAudioElement } = {};
clips.forEach((item) => {
  clipObj[`${item.id}`] = item;
});

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  // Display the key pressed
  if (displayElem instanceof HTMLParagraphElement) {
    displayElem.textContent = event.key.toUpperCase();
  }

  switch (event.key.toUpperCase()) {
    case "Q": {
      const clip = Array.from(clips).find((node) => node.id === "Q");
      if (clip) {
        clip.currentTime = 0;
        clip.play();
      }
      break;
    }
    case "W": {
      const clip = Array.from(clips).find((node) => node.id === "W");
      if (clip) {
        clip.currentTime = 0;
        clip.play();
      }
      break;
    }
    case "E": {
      const clip = Array.from(clips).find((node) => node.id === "E");
      if (clip) {
        clip.currentTime = 0;
        clip.play();
      }
      break;
    }
    case "A": {
      const clip = Array.from(clips).find((node) => node.id === "A");
      if (clip) {
        clip.currentTime = 0;
        clip.play();
      }
      break;
    }
    case "S": {
      const clip = Array.from(clips).find((node) => node.id === "S");
      if (clip) {
        clip.currentTime = 0;
        clip.play();
      }
      break;
    }
    case "D": {
      const clip = Array.from(clips).find((node) => node.id === "D");
      if (clip) {
        clip.currentTime = 0;
        clip.play();
      }
      break;
    }
    case "Z": {
      const clip = Array.from(clips).find((node) => node.id === "Z");
      if (clip) {
        clip.currentTime = 0;
        clip.play();
      }
      break;
    }
    case "X": {
      const clip = Array.from(clips).find((node) => node.id === "X");
      if (clip) {
        clip.currentTime = 0;
        clip.play();
      }
      break;
    }
    case "C": {
      const clip = Array.from(clips).find((node) => node.id === "C");
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

function playAudio(ref: string) {
  clipObj[ref].play();
}

function clickFn(evt: Event) {
  evt.preventDefault();
  const elem = evt.target as HTMLDivElement;
  if (elem.innerText && displayElem) {
    displayElem.textContent = elem.innerText;
    playAudio(elem.innerText);
  }
}

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", clickFn);
}
