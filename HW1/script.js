// Scroll Reveal
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));


// Dark Mode
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

//Carousel
const carousel = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");

let index = 1;
let size = 150;

const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, items[0]);

carousel.style.transform = `translateX(-${size * index}px)`;

document.querySelector(".next").addEventListener("click", () => {
    if (index >= items.length + 1) return;
    index++;
    carousel.style.transition = "transform 0.5s ease";
    carousel.style.transform = `translateX(-${size * index}px)`;
});

document.querySelector(".prev").addEventListener("click", () => {
    if (index <= 0) return;
    index--;
    carousel.style.transition = "transform 0.5s ease";
    carousel.style.transform = `translateX(-${size * index}px)`;
});

carousel.addEventListener("transitionend", () => {
    const allItems = document.querySelectorAll(".carousel-item");

    if (allItems[index].isSameNode(firstClone)) {
        carousel.style.transition = "none";
        index = 1;
        carousel.style.transform = `translateX(-${size * index}px)`;
    }

    if (allItems[index].isSameNode(lastClone)) {
        carousel.style.transition = "none";
        index = items.length;
        carousel.style.transform = `translateX(-${size * index}px)`;
    }
});

//Modal
function openModal(text) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-text").innerText = text;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// close
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}