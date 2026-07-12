var activeLinkText = document.querySelector("#active_link_name");

var homeLink = document.querySelector("#home-link");
homeLink.addEventListener('click', (event) => {
    resetNavLink();
    activeLinkText.textContent = "Home";
    homeLink.classList.add("active")
});

var aboutLink = document.querySelector("#about-link");
aboutLink.addEventListener('click', (event) => {
    resetNavLink();
    activeLinkText.textContent = "About";
    aboutLink.classList.add("active")
});

var projectLink = document.querySelector("#project-link");
projectLink.addEventListener('click', (event) => {
    resetNavLink();
    activeLinkText.textContent = "Project";
    projectLink.classList.add("active")
});

var contactLink = document.querySelector("#contact-link");
contactLink.addEventListener('click', (event) => {
    resetNavLink();
    activeLinkText.textContent = "Contact";
    contactLink.classList.add("active")
});

function resetNavLink() {
    homeLink.classList.remove("active")
    aboutLink.classList.remove("active")
    projectLink.classList.remove("active")
    contactLink.classList.remove("active")
}