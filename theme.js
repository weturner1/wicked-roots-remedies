document.addEventListener("DOMContentLoaded", function () {
    let toggleButton = document.querySelector(".toggle-dark-mode");

    // Ensure the button exists before adding event listener
    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            // Store user preference in local storage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }

    // Load user preference from local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});