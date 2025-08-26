const AppConfig = {
    name: "MiApp",
    version: "1.0.0",
    apiUrl: "https://andres21y.github.io/prototype_best_milk/",
    routes: {
        login: "views/login/index.html",
        signup: "views/signup/index.html",
        error: "error/index.html",
        dashboard: "views/dashboard/index.html"
    }
};



function navigateTo(props) {
    window.location.href = `views/${props}/index.html`;
    console.log(props);
    
}

/* Hacer funciones disponibles globalmente*/
window.navigateTo = Utils.navigateTo;
window.showToast = Utils.showToast;
window.validateEmail = Utils.validateEmail;
