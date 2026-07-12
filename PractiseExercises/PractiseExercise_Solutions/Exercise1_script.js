var likeBtn = document.querySelector("#like-btn");
likeBtn.addEventListener('click', (event) => {
    if(likeBtn.textContent == "Like") {
        likeBtn.textContent = "Liked";
        likeBtn.classList.add("liked")
    } else {
        likeBtn.textContent = "Like";
        likeBtn.classList.remove("liked")
    }
});