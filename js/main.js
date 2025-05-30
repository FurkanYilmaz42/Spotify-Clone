import API from "./api.js";
import UI from "./ui.js";

const api = new API();
const ui = new UI();

document.addEventListener("DOMContentLoaded", async () => {
  const songs = await api.getPopular();

  ui.renderCards(songs);

 
  
});


