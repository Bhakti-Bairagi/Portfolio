document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded!");
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    const status = document.getElementById("form-status");
    if (response.ok) {
        status.textContent = "Message sent successfully!";
        this.reset();
    } else {
        status.textContent = "Oops! Something went wrong.";
    }
});
const text = "Portfolio";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

const hiddenElements = document.querySelectorAll(".hidden");

function revealOnScroll() {
    hiddenElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('lightbox').style.display = 'flex';
        document.getElementById('lightbox-img').src = this.src;
    });
});

document.getElementById('lightbox').addEventListener('click', function() {
    this.style.display = 'none';
});
window.onscroll = function() {
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    let progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
};
