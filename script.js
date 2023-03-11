const container = document.getElementById('container');
const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

const colors = ['#fff', '#FFD700', '#FF0000','#056608', '#7600bc'];

const audioList = ['/sounds/f6-102819.mp3', '/sounds/fa-78409.mp3', '/sounds/re-78500.mp3', '/sounds/si-80238.mp3', '/sounds/sol-101774.mp3']

const SQUARES = 600;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  const autoPlay = container.appendChild(square);
  setInterval(function() {
    for (let y = 0; y < 5; y++) {
      autoPlay.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
    }
  }, 300);
}

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }
  button.classList.add("fade");
});

