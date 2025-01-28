document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("image-container");
    const switchInput = document.getElementById("flexSwitchCheckDefault");

    // Add an event listener to the switch input
    switchInput.addEventListener("change", function () {
        if (switchInput.checked) {
            imageContainer.classList.add("active"); // Add the 'active' class
        } else {
            imageContainer.classList.remove("active"); // Remove the 'active' class
        }
    });
});