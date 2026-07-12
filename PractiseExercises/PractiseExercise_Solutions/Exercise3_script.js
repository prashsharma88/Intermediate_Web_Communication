var imgBtn1 = document.querySelector("#img1");
var imgBtn2 = document.querySelector("#img2");
var imgBtn3 = document.querySelector("#img3");
var imgViewer = document.querySelector("#img-viewer");

imgBtn1.addEventListener('click', (event) => {
    imgViewer.src = "https://picsum.photos/id/71/200/300";
    imgViewer.alt = "Image of wooden swing"
});
imgBtn2.addEventListener('click', (event) => {
    imgViewer.src = "https://picsum.photos/id/74/200/300";
    imgViewer.alt = "Image of sea"
});
imgBtn3.addEventListener('click', (event) => {
    imgViewer.src = "https://picsum.photos/id/67/200/300";
    imgViewer.alt = "Image of forest"
});
