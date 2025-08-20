// Your code here.
// Available sounds (same naam ke audio files sounds/ folder me hone chahiye)
const sounds = ["sound1", "sound2", "sound3", "sound4"];

const buttons = document.getElementById("buttons");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    let audio = document.getElementById(sound);
    if (!audio) {
      audio = document.createElement("audio");
      audio.id = sound;
      audio.src = `sounds/${sound}.mp3`;
      document.body.appendChild(audio);
    }
    audio.play();
  });

  buttons.appendChild(btn);
});

// Stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", () => {
  stopSounds();
});

buttons.appendChild(stopBtn);

function stopSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}
