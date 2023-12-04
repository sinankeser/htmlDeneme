async function logMovies() {
  const response = await fetch("https://api.waifu.pics/sfw/waifu");
  const movies = await response.json();
  document.getElementById("js-link").src=movies["url"];
}
logMovies();
