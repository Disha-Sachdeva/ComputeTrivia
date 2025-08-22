    document.addEventListener("DOMContentLoaded", function() {
        // Get a reference to the button
        var button = document.getElementById("play");

        // Add event listener to the button
        button.addEventListener("click", function() {
            // URL of the webpage you want to open
            var url = "categories.html"; // Replace with your URL
            
            // Open the webpage in a new tab or window
            window.open(url, "_self");
        });
    });

