class API {
  constructor() {
    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "811919ae51msha18b9fee9065902p181c9ajsn31d115a06575",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };

    this.baseURL = `https://shazam.p.rapidapi.com`;
  }

  async getPopular() {
    try {
      const response = await fetch(
        `${this.baseURL}/search?term=neffex`,
        this.options
      );

      const data = await response.json();

      return data.tracks.hits.map((item) => item.track);
    } catch (error) {
        alert(`hata: ${error}`)
    }
  }
}

export default API;
