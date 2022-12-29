// Getting all the buttons and sliders
let video = document.getElementById("frozen-video");
let timeSlider = document.getElementById("time");
let playButton = document.getElementById("play");
let stopButton = document.getElementById("stop");
let startButton = document.getElementById("start");
let backwardButton = document.getElementById("backward");
let forwardButton = document.getElementById("forward");
let endButton = document.getElementById("end");
let soundSlider = document.getElementById("sound");
let muteButtton = document.getElementById("mute");
let speedSlider = document.getElementById("speed");
let timeSpan = document.getElementById("timeSpan");

let myInterval;

// Play button
playButton.addEventListener("click", function () {
  video.play();
  // Time slider
  myInterval = setInterval(function () {
    timeSlider.value = video.currentTime;
    if (video.currentTime < 10) {
      timeSpan.innerHTML = "0:0" + Math.ceil(video.currentTime) + "/1:50";
    } else if (video.currentTime >= 10 && video.currentTime < 60) {
      timeSpan.innerHTML = "0:" + Math.ceil(video.currentTime) + "/1:50";
    } else if (video.currentTime >= 60 && video.currentTime < 70) {
      timeSpan.innerHTML =
        "1:0" + (Math.ceil(video.currentTime) - 60) + "/1:50";
    } else {
      timeSpan.innerHTML = "1:" + (Math.ceil(video.currentTime) - 60) + "/1:50";
    }
  }, 1000);
});

//Time slider
timeSlider.addEventListener("change", function () {
  video.currentTime = timeSlider.value;
  video.play();
  if (video.currentTime < 10) {
    timeSpan.innerHTML = "0:0" + Math.ceil(video.currentTime) + "/1:50";
  } else if (video.currentTime >= 10 && video.currentTime < 60) {
    timeSpan.innerHTML = "0:" + Math.ceil(video.currentTime) + "/1:50";
  } else if (video.currentTime >= 60 && video.currentTime < 70) {
    timeSpan.innerHTML = "1:0" + (Math.ceil(video.currentTime) - 60) + "/1:50";
  } else {
    timeSpan.innerHTML = "1:" + (Math.ceil(video.currentTime) - 60) + "/1:50";
  }
});

// Stop button
stopButton.addEventListener("click", function () {
  video.pause();
  clearInterval(myInterval);
});

// Start button
startButton.addEventListener("click", function () {
  video.currentTime = 0;
});

// End button
endButton.addEventListener("click", function () {
  video.currentTime = 110;
});

// Forward button
forwardButton.addEventListener("click", function () {
  video.currentTime += 5;
});

// Backward button
backwardButton.addEventListener("click", function () {
  video.currentTime -= 5;
});

// Sound slider
soundSlider.addEventListener("change", function () {
  video.volume = soundSlider.value;
});

// Mute button
muteButtton.addEventListener("click", function () {
  video.volume = 0;
  soundSlider.value = 0;
});

// Speed slider
speedSlider.addEventListener("change", function () {
  video.playbackRate = speedSlider.value * 4;
});
