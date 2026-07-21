var correctAudio = new Audio('media/audio/right-answer.mp3');
var wrongAudio = new Audio('media/audio/wrong-answer.mp3');
var backgroundAudio = new Audio('media/audio/waiting_for_a_train.mp3');

let audioUnlocked = false;

// document.addEventListener('click', (event) => {
//     audioUnlocked = true;
// })

// document.addEventListener('scroll', (event) => {
//     console.log("scrolling");
//     if(audioUnlocked)
//         backgroundAudio.play();
// });

var ans1 = document.querySelector('#ans1');
ans1.addEventListener('click', (event) => {
    wrongAudio.currentTime - 0;
    wrongAudio.play();
    ans1.classList.remove("hide");
});
var ans2 = document.querySelector('#ans2');
ans2.addEventListener('click', (event) => {
    correctAudio.currentTime - 0;
    correctAudio.play();
    ans2.classList.remove("hide");
});
var ans3 = document.querySelector('#ans3');
ans3.addEventListener('click', (event) => {
    wrongAudio.currentTime - 0;
    wrongAudio.play();
    ans3.classList.remove("hide");
});
var ans4 = document.querySelector('#ans4');
ans4.addEventListener('click', (event) => {
    wrongAudio.currentTime - 0;
    wrongAudio.play();
    ans4.classList.remove("hide");
});



var my_video = document.querySelector('#my-video');

document.addEventListener('scroll', (event) => {
    var rect = my_video.getBoundingClientRect();
    if(rect.top >= 0 && rect.bottom <= window.innerHeight) {
        my_video.play();
    } else {
        my_video.pause();
    }
});