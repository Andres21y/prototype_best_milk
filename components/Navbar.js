const Navbar = {
    render() {
        return `
            <div class="navbar-fixed">
                <nav>
                    <div class="nav-wrapper">
                    <a href="#" class="brand-logo grey-text text-darken-3"><img class="responsive-img" src="assets/images/best_milk_main.png"></a>
                            <a href="#" data-target="mobile-demo" class="sidenav-trigger grey-text text-darken-3">
                                <i class="material-icons">menu</i>
                            </a>
                            <ul class="right hide-on-med-and-down">
                                <li><a href="#" onclick="navigateTo('contac')" class="grey-text text-darken-4">Contac</a></li>
                                <li><a href="#" onclick="navigateTo('login')" class="grey-text text-darken-4">Iniciar Sesión</a></li>
                                <li><a href="#" onclick="navigateTo('signup')" class="btn indigo darken-1 white-text">Registrarse</a></li>
                            </ul>
                        </div>
                </nav>
            </div>

            <ul class="sidenav" id="mobile-demo" >
              <li>
                <div class="user-view">
                    <div class="background"></div>
                    <img src="./assets/images/best_milk_main.png" style="width:90%; height:40px;">
                </div>
                </li>
                <li><a href="#" onclick="navigateTo('')"><i class="material-icons red-text">home</i>Home</a></li>
                <li><a href="#" onclick="navigateTo('login')">Iniciar Sesión</a></li>
                <li><a href="#" onclick="navigateTo('signup')">Registrarse</a></li>
                <li><a href="#" onclick="navigateTo('admin')">Admin</a></li>

                <li><div class="divider"></div></li>

                <li><a href="#" onclick="navigateTo('contac')">Contac</a></li>
                <li><a href="#" onclick="navigateTo('help')">Help</a></li>
                <li><a href="#" onclick="navigateTo('setting')">Settings</a></li>
            </ul>
        `;
    },
};