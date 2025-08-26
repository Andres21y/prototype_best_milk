document.addEventListener('DOMContentLoaded', function () {
    load_component();
    M.AutoInit();
});

function load_component() {
    setTimeout(() => {
        const sidenavElems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenavElems);
    }, 100);

    document.getElementById('navbar-container').innerHTML = Navbar.render();

}