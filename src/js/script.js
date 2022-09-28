(function (global) {

    var js = {};

    const englishJsonDataUrl = "../assets/data/en/data.json";
    const frenchJsonDataUrl = "../assets/data/fr/data.json";


    const header = document.querySelector('header');
    var navMenuOpen = false;
    js.navMenu = function () {
        if (!navMenuOpen) {
            header.classList.add('header--expanded');
            navMenuOpen = true;
        } else {
            header.classList.remove('header--expanded');
            navMenuOpen = false;
        }
    };

    js.translate = function () {
        const lang = document.querySelector(".navbar__link--lang").textContent;
        const jsonDataURL = lang === "FR" ? frenchJsonDataUrl : englishJsonDataUrl;

        $ajaxUtils.sendGetRequest(jsonDataURL, function(res){
            const nodeList = document.querySelectorAll(".navbar__link");
            
            for (let i = 0; i < nodeList.length; i++) {
                i.textContent = res.navbar[i];
            }   
        }, true)
    };

    global.$js = js;

}) (window)

