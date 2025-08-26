


/* Navegar entre paginas */
function navigateTo(props) {
    window.location.href = `views/${props}/index.html`;
    console.log(props);
}

/* Hacer funciones disponibles globalmente*/
window.navigateTo = Utils.navigateTo;
window.showToast = Utils.showToast;
window.validateEmail = Utils.validateEmail;
