// Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Mostrar ou esconder o botão de voltar ao topo
window.onscroll = function() {
    let backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Rolar para o topo ao clicar no botão
document.getElementById('back-to-top').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
