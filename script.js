// Add event listeners to buttons
document.getElementById("downloadButton").addEventListener("click", download);
document.getElementById("demoButton").addEventListener("click", demo);

// Function to open the download page
function download() {
  console.log("Download triggered");
  openUrl("https://buymeacoffee.com/scrollr/e/351273");
}

// Function to open the demo video
function demo() {
  console.log("Demo triggered");
  openUrl("https://youtu.be/8Mhtyn4EcVk");
}

// Function to open a URL in a new tab
function openUrl(url) {
  window.open(url, "_blank");
}

// function loadBuyMeCoffeeWidget() {
//   console.log("Loading Buy Me a Coffee widget...");

//   const script = document.createElement("script");
//   script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";

//   // Set widget attributes
//   script.setAttribute("data-name", "BMC-Widget");
//   script.setAttribute("data-id", "scrollr");
//   script.setAttribute("data-description", "Support me on Buy me a coffee!");
//   script.setAttribute("data-message", "Help me build more such apps");
//   script.setAttribute("data-color", "#5F7FFF");
//   script.setAttribute("data-position", "Right");
//   script.setAttribute("data-x_margin", "18");
//   script.setAttribute("data-y_margin", "18");

//   // Add an event listener to check when the script is loaded
//   script.onload = function () {
//     console.log("Buy Me a Coffee widget loaded successfully!");
//   };

//   script.onerror = function () {
//     console.error("Failed to load the Buy Me a Coffee widget.");
//   };

//   // Append the script to the document body
//   document.body.append(script);
// }

// // Call the function when the page loads
// window.addEventListener("DOMContentLoaded", loadBuyMeCoffeeWidget);