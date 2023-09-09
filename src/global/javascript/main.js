try {
    var navbar = document.querySelector("#header");
    var navbarHeight = window.getComputedStyle(navbar).height;

    document.getElementById(
        "main"
    ).style.height = `calc(100vh - ${navbarHeight})`;
} catch (e) {
    console.log("Não está na página inicial.");
}

try {
    const btnMobile = document.getElementById("btn-mobile");

    function toggleMenu(event) {
        if (event.type === "touchstart") event.preventDefault();

        const nav = document.getElementById("nav");
        nav.classList.toggle("active");

        const active = nav.classList.contains("active");
        event.currentTarget.setAttribute("aria-expanded", active);

        if (active) {
            event.currentTarget.setAttribute("aria-label", "Fechar menu");
        } else {
            event.currentTarget.setAttribute("aria-label", "Abrir menu");
        }
    }

    btnMobile.addEventListener("click", toggleMenu);
    btnMobile.addEventListener("touchstart", toggleMenu);
    document.addEventListener("click", function (event) {
        if (document.getElementById("nav").classList.contains("active")) {
            document.getElementById("nav").classList.toggle("active");
            document
                .getElementById("btn-mobile")
                .setAttribute("aria-label", "Abrir menu");
        }
    });
} catch (e) {
    console.log("Não está na página inicial.");
}

// TYPED TEXT
try {
    const textElement = document.getElementById("typed-text");
    const texts = [
        "Olá! Meu nome é Henri Lima.",
        "Comprando Bitcoins...",
        "Jogando com a Cipher.",
    ];
    let index = 0;
    let isDeleting = false;
    let charIndex = 0;
    let delay = 150;

    function typeText() {
        const currentText = texts[index];
        if (isDeleting) {
            textElement.innerHTML = currentText.slice(0, charIndex);
            charIndex--;
        } else {
            textElement.innerHTML = currentText.slice(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            delay = 100;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index++;
            delay = 100;
            if (index === texts.length) {
                index = 0;
            }
        }

        setTimeout(typeText, delay);
    }

    typeText();
} catch (e) {
    console.log("Não está na página inicial.");
}

const scroller = document.getElementById("scroller-container");
let isDown = false;
let startX;
let scrollLeft;

scroller.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - scroller.offsetLeft;
    scrollLeft = scroller.scrollLeft;
});

scroller.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scroller.offsetLeft;
    scrollLeft = scroller.scrollLeft;
});

scroller.addEventListener("mouseleave", () => {
    isDown = false;
});

scroller.addEventListener("mouseup", () => {
    isDown = false;
});

scroller.addEventListener("touchend", () => {
    isDown = false;
});

scroller.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scroller.offsetLeft;
    const walk = (x - startX) * 1.5; // Ajuste a sensibilidade de arrastar conforme necessário
    scroller.scrollLeft = scrollLeft - walk;
});

scroller.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scroller.offsetLeft;
    const walk = (x - startX) * 1.5; // Ajuste a sensibilidade de arrastar conforme necessário
    scroller.scrollLeft = scrollLeft - walk;
});

// ANIMATION SCROLL

function animateHorizontalScroll(element, targetScrollLeft, duration) {
    const startScrollLeft = element.scrollLeft;
    const startTime = performance.now();

    function scrollStep(timestamp) {
        const timeElapsed = timestamp - startTime;
        const scrollProgress = Math.min(timeElapsed / duration, 1);
        const newScrollLeft =
            startScrollLeft +
            (targetScrollLeft - startScrollLeft) * scrollProgress;
        element.scrollLeft = newScrollLeft;

        if (timeElapsed < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

function startAnimation() {
    const scroller = document.getElementById("scroller-container");
    const scrollAmount = 500;
    const animationDuration = 3000;

    setTimeout(() => {
        animateHorizontalScroll(
            scroller,
            scroller.scrollLeft + scrollAmount,
            animationDuration
        );
        setTimeout(() => {
            animateHorizontalScroll(
                scroller,
                scroller.scrollLeft - scrollAmount,
                animationDuration
            );
        }, 500);
    }, 500);
}

window.onload = startAnimation;
