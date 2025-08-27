
/* Navegar entre paginas */
function navigateTo(item) {
    window.location.href = `views/${item}/index.html`;
    console.log(item);
}

/* Hacer funciones disponibles globalmente*/
window.navigateTo = Utils.navigateTo;
window.showToast = Utils.showToast;
window.validateEmail = Utils.validateEmail;
