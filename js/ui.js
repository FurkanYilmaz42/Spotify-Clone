class UI {
  constructor() {
    this.musicList = document.querySelector("#music-list");
  }

  renderCards(songs) {
    songs.forEach((song) => {

         console.log(song);
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `<figure>
                <img
                  src="${song.images.coverarthq}"
                  alt="card-image"
                />
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>

              <div class="card-info">
                <h4>${song.title}</h4>
                <h4>${song.subtitle}</h4>
              </div>`;

      this.musicList.appendChild(card);
    });
  }
}

export default UI;
