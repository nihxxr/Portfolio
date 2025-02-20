document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".profile-pic", { opacity: 0, scale: 0.5, duration: 1.2 });
    gsap.from(".neon-text", { opacity: 0, x: -100, duration: 1, delay: 0.5 });
    gsap.from(".project-card", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
});
