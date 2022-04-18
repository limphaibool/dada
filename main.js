const scene_1 = new mojs.Html({
  el: "#scene-1",
  opacity: { 1: 0 },
  delay: 500,
  duration: 2000,
});

document.getElementById("scene-1").addEventListener("click", function () {
  console.log("meme");
  scene_1.play();
});
