document.addEventListener('DOMContentLoaded', function () {
  startApp();
  M.AutoInit();
});

function startApp() {
  
  console.log("start app is On");
  
  setTimeout(() => {
    const sidenavElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElems);
  }, 100);

  document.getElementById('navbar-container').innerHTML = Navbar.render();
  document.getElementById('features-container').innerHTML = Features.render();
  document.getElementById('stats-container').innerHTML = Stats.render();
  document.getElementById('cta-container').innerHTML = Cta.render();
  document.getElementById('footer-container').innerHTML = Footer.render();
}

