// Плавный скролл по якорям
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href").substring(1);
            const targetEl = document.getElementById(targetId);
            if (!targetEl) return;
            e.preventDefault();
            window.scrollTo({
                top: targetEl.offsetTop - 70,
                behavior: "smooth"
            });
        });
    });

    // Год в футере
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Кнопка "наверх"
    const scrollBtn = document.querySelector(".scroll-top");
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 320) {
                scrollBtn.style.display = "flex";
            } else {
                scrollBtn.style.display = "none";
            }
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
