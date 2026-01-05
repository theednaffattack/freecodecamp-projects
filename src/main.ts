// import { setupCounter } from "./counter.ts";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Freecode Camp Projects</h1>

    <a href="/pages/css/playing_cards/">Playing Cards</a>
    <a href="/pages/css/book_inventory/">Book Inventory</a>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
