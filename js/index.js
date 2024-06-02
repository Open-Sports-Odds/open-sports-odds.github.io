function registerButtonClick(title, location) {
    const button = document.querySelector("#" + title);
    button.addEventListener("click", () => {
        console.log(title + " button clicked");
        console.log(window.location.href);
        window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/" + location + ".html";
    });    
}

window.onload = function() {
    registerButtonClick("nba", "soon");
    registerButtonClick("mlb", "soon");
    registerButtonClick("nhl", "nhl");
    registerButtonClick("de", "de");
}