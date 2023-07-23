
window.addEventListener('scroll', function () {
    const goToTopBtn = document.getElementById('goToTopBtn');
    if (window.scrollY > 100) {
        goToTopBtn.style.display = 'block';
    } else {
        goToTopBtn.style.display = 'none';
    }
});

document.getElementById('goToTopBtn').addEventListener('click', function (event) {
    event.preventDefault(); 
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
