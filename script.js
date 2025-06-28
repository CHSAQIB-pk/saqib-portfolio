function toggleMenu() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('active');
}
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

function refreshPage() {
    setTimeout(function() {
        window.location.reload();
    }, 1000);
}