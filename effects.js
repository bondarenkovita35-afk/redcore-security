// Лёгкий параллакс для hero-ядра
document.addEventListener("mousemove", (e) => {
    const core = document.querySelector(".core-orbit");
    if (!core) return;

    const rect = core.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const y = (e.clientY - (rect.top + rect.height / 2)) / rect.height;

    core.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});

// Немного тени для header при скролле
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (!header) return;
    const offset = window.scrollY;
    header.style.boxShadow =
        offset > 10 ? "0 10px 24px rgba(0,0,0,0.8)" : "none";
});
