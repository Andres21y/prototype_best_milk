const AppConfig = {
    name: "MiApp",
    version: "1.0.0",
    apiUrl: "https://andres21y.github.io/prototype_best_milk/",
    routes: {
        login: "views/login/index.html",
        signup: "views/signup/index.html",
        error: "error/index.html",
        dashboard: "views/admin/index.html"
    }
};

document.addEventListener('DOMContentLoaded', function () {
  startApp();
  M.AutoInit();
});

function startApp() {
  
  setTimeout(() => {
    const sidenavElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElems);
  }, 100);

  document.getElementById('navbar').innerHTML = Navbar.render();
  document.getElementById('features').innerHTML = Features.render();
  document.getElementById('stats').innerHTML = Stats.render();
  document.getElementById('cta').innerHTML = Cta.render();
  document.getElementById('footer').innerHTML = Footer.render();
}

