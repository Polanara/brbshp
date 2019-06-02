var link = document.querySelector(".login-link");
    var popup = document.querySelector(".modal-login");
    var close = document.querySelector(".modal-close");
    var login = popup.querySelector("[name=login]");
    var password = popup.querySelector("[name=password]");
    var form = popup.querySelector("form");

    var isStorageSupport = true;
    var storage = "";

    try {
        storage = localStorage.getItem("login");
    }
    catch (err) {
        isStorageSupport = false;
    }

    link.addEventListener("click", function(event) {
        event.preventDefault(); 
        popup.classList.add("modal-show"); 
        login.focus(); 
        if (storage) {
                login.value = storage;
                password.focus();
            }
            else {
                login.focus();
            }             
    });

    close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    });

    window.addEventListener("keydown", function(event) {
                if (event.keyCode === 27) {
                    event.preventDefault(); 
                    if (popup.classList.contains("modal-show")) {
                        popup.classList.remove("modal-show");
                        popup.classList.remove("modal-error");
                    }
                }
            });

    form.addEventListener("submit", function(event) {
                if (!login.value || !password.value) {
                event.preventDefault();
                popup.classList.add("modal-error");
                }
                else {
                    if (isStorageSupport) {
                    localStorage.setItem("login", login.value)
                }
                }
            });
