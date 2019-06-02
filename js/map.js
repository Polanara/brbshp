var mapOpen = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapOpen.addEventListener("click", function(event) {
            event.preventDefault();
            mapPopup.classList.add("modal-show");
        });
            mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-show");
        });
        window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
        }
        }
        });