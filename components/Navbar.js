const Navbar = {
    render() {
        return `
            <div class="navbar-fixed">
                <nav>
                    <div class="nav-wrapper">
                    <a href="#" class="brand-logo grey-text text-darken-3"><img class="responsive-img" src="/Public/assets/images/best_milk_main.png"></a>
                            <a href="#" data-target="mobile-demo" class="sidenav-trigger grey-text text-darken-3">
                                <i class="material-icons">menu</i>
                            </a>
                            <ul class="right hide-on-med-and-down">
                            <li><a href="#" onclick="navigateTo('contac')">Contac</a></li>
                                <li><a href="#" onclick="navigateTo('login')" class="grey-text text-darken-1">Iniciar Sesión</a></li>
                                <li><a href="#" onclick="navigateTo('signup')" class="btn indigo darken-1 white-text">Registrarse</a></li>
                            </ul>
                        </div>
                </nav>
            </div>

            <ul class="sidenav blue lighten-5" id="mobile-demo" >
              <li>
                <div class="user-view">
                     <div class="background" ></div>
                        <img src="./assets/images/best_milk_main.png" style="width:100%">
                    </div>
                </li>
                <li><a href="#" onclick="navigateTo('')">Home</a></li>
                <li><a href="#" onclick="navigateTo('login')">Iniciar Sesión</a></li>
                <li><a href="#" onclick="navigateTo('signup')">Registrarse</a></li>
                <li><a href="#" onclick="navigateTo('dashboard')">Dashboard</a></li>

                <li><div class="divider"></div></li>
                <li><a href="#" onclick="navigateTo('contac')">Contac</a></li>
                <li><a href="#" onclick="navigateTo('help')">Help</a></li>
                <li><a href="#" onclick="navigateTo('setting')">Settings</a></li>
            </ul>
        `;
    },
};