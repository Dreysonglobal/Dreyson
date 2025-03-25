


setInterval(moveSlider, 3000);

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent normal form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let whatsappMessage = `Hello, my name is ${name}. My email is ${email}. ${message}`;
    let whatsappURL = `https://wa.me/2348161653750?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank"); // Open WhatsApp chat
});

let slider = document.querySelector(".slider");
let index = 0;

function moveSlider() {
    index++;
    if (index > 2) {
        index = 0;
    }
    slider.style.transform = `translateX(${-index * 33.33}%)`;
}

setInterval(moveSlider, 3000);
