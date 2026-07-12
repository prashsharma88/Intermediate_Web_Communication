// Select the about nav link
var aboutLink = document.querySelector("#about-link");
var homeLink = document.querySelector("#home-link");
var projectLink = document.querySelector("#project-link");
var contactLink = document.querySelector("#contact-link")

var linkName = document.querySelector("#active_link_name");

// Add click event listener to it
aboutLink.addEventListener('click', (event) => {
    aboutLink.classList.add("active");
    // remove active class from home link
    homeLink.classList.remove("active");
    projectLink.classList.remove("active");
    contactLink.classList.remove("active");
    linkName.textContent = "About";
});
// Inside click event listener, add "active class to about nav link"
// Update the text of h2(id = active_link_name) element to "About"

homeLink.addEventListener('click', (event) => {
    homeLink.classList.add("active");
    aboutLink.classList.remove("active");
    projectLink.classList.remove("active");
    contactLink.classList.remove("active");
    linkName.textContent = "Home";
});

projectLink.addEventListener('click', (event) => {
    projectLink.classList.add("active");
    homeLink.classList.remove("active");
    aboutLink.classList.remove("active");
    contactLink.classList.remove("active");
    linkName.textContent = "Project";
});

contactLink.addEventListener('click', (event) => {
    contactLink.classList.add("active");
    homeLink.classList.remove("active");
    aboutLink.classList.remove("active");
    projectLink.classList.remove("active");
    linkName.textContent = "Contact";
});
