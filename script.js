//--Go to Top Button-----------------------------------------

const goUpBtn = document.querySelector(".go-up");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        goUpBtn.classList.remove("hidden");
    } else {
        goUpBtn.classList.add("hidden");
    }
});

//--Ham Menu Toggle---------------------------------------------

const hamMenu = document.querySelector(".ham-menu");

const hambar1 = document.querySelector(".hambar1");
const hambar2 = document.querySelector(".hambar2");
const hambar3 = document.querySelector(".hambar3");

const menu = document.querySelector("nav ul");
const nav = document.querySelector("nav");

hamMenu.addEventListener("click", () => {
    toggleMenu();
});

const menuItems = document.querySelectorAll("nav li");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        toggleMenu();
    });
});

const toggleMenu = () => {
    hamMenu.classList.toggle("toggle-menu");
    hambar1.classList.toggle("toggle-menu");
    hambar2.classList.toggle("toggle-menu");
    hambar3.classList.toggle("toggle-menu");
    menu.classList.toggle("toggle-menu");
    nav.classList.toggle("toggle-menu");
}

//--Image Displayer---------------------------------------------

const btnBack = document.querySelector(".displayer-button.left");
const btnNext = document.querySelector(".displayer-button.right");

btnBack.addEventListener("click", () => slideImage("back"));
btnNext.addEventListener("click", () => slideImage("next"));

const imageDisplayer = document.querySelector(".displayer-image");
window.onload = () => imageDisplayer.scrollLeft = 0; //--resets scroll on page refresh

const thumbnails = document.querySelectorAll(".displayer-gallery img");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => selectImage(parseId(thumb.id)));
});

//--Image Displayer Slider Buttons------------------------------
const slideImage = (type) => { //--expects back or next and gives the new img id to selectImage to validate
    const currentImageId = parseId(document.querySelector(".selected").id);

    const newImageId = (type === "back" ? currentImageId - 1 : currentImageId + 1) ;

    selectImage(newImageId);
}

//--Image Displayer Image Selection--------------------------
const selectImage = (selectedId) => { //--valdiates id and selects image
    //--checks if selected image is the current one
    if (document.querySelector(".selected").id === "gal"+selectedId) return null

    //--checks if given id is valid
    const selectedImage = document.getElementById("gal"+selectedId);
    if (!selectedImage) return null

    //--selects image
    thumbnails.forEach(thumb => thumb.classList.remove("selected"));
    selectedImage.classList.add("selected");

    scrollDisplayer(selectedId);

    return selectedId;
}

const parseId = (idString) => { //--removes prefix of id value and returns integer
    return parseInt(idString.split("gal")[1], 10 );
}

//--Image Displayer scroll to image fucntion
const scrollDisplayer = (imageId) => { //--expects valid image id and scrolls to its position
    let scrollPosition = imageDisplayer.scrollLeft;
    const displayerWidth = imageDisplayer.offsetWidth; //--displayer's current width (changes based on viewport size)

    scrollPosition = imageId * displayerWidth - displayerWidth;

    imageDisplayer.scrollTo(scrollPosition, 0);    
}


//--Message Sent Alert Box------------------------------------------------------

const messageForm = document.querySelector("form");
const dialogueBox = document.querySelector(".dialogue-box");

messageForm.addEventListener("submit", ev => {
    ev.preventDefault(); //--For ignoring Submit page reload
    dialogueBox.classList.remove("hidden"); 
});

const dialogueBtn = document.querySelector(".dialogue-box button");

dialogueBtn.addEventListener("click", () => {
    dialogueBox.classList.add("hidden");
});