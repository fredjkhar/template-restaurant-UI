window.addEventListener('DOMContentLoaded', () => {

    const aboutImg = document.querySelector(".about-section__image");
    const aboutInfo = document.querySelector(".about-section__info");

    var aboutImgHeight = aboutImg.offsetHeight;
    aboutInfo.style.height = aboutImgHeight;


    window.addEventListener("resize", () => {
        aboutInfo.style.height = aboutImg.offsetHeight;
    });

    window.addEventListener("scroll", function() {
        var scroll_y = this.scrollY;
        var aboutImgCoordinates = aboutImg.getBoundingClientRect();
        var aboutInfoCoordinates = aboutInfo.getBoundingClientRect();

        console.log(aboutInfo.offsetHeight, aboutImg.offsetHeight);
        if (aboutImgCoordinates.top >= aboutInfoCoordinates.top) {
            aboutImg.style.transform = "translateY(calc(-" + scroll_y + "px /5)";
        }
    });
});