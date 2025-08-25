const Footer = {
    render(config = {}) {
        const {
            brandName = "<img class=responsive-img src=../assets/images/best_milk_main.png>",
            description = "La plataforma que necesitas para llevar tu negocio al siguiente nivel.",
            sections = [
                {
                    title: "Producto",
                    links: [
                        { text: "Características", href: "#" },
                        { text: "Precios", href: "#" },
                        { text: "Integraciones", href: "#" }
                    ]
                },
                {
                    title: "Soporte",
                    links: [
                        { text: "Centro de Ayuda", href: "#" },
                        { text: "Contacto", href: "#" },
                        { text: "Estado del Sistema", href: "#" }
                    ]
                },
                {
                    title: "Acceso Rápido",
                    links: [
                        { text: "Iniciar Sesión", href: "#", onclick: "navigateTo('login')" },
                        { text: "Registrarse", href: "#", onclick: "navigateTo('signup')" }
                    ]
                }
            ],
            copyright = "© 2024 MiApp. Todos los derechos reservados."
        } = config;

        const sectionsHTML = sections.map(section => `
            <div class="col s12 m3">
                <h6 class="white-text">${section.title}</h6>
                <ul>
                    ${section.links.map(link => `
                        <li><a class="grey-text text-lighten-1" href="${link.href}" ${link.onclick ? `onclick="${link.onclick}"` : ''}>${link.text}</a></li>
                    `).join('')}
                </ul>
            </div>
        `).join('');

        return `
            <footer class="footer-section white-text">
                <div class="container center-align " style="height:250px ">
                    <div class="row">
                        <div class="col s12 m3">
                            <h5 class="brand-logo">${brandName}</h5>
                            <p class="grey-text text-lighten-1">${description}</p>
                        </div>
                        ${sectionsHTML}
                    </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container center-align">
                        <span class="grey-text text-lighten-1">${copyright}</span>
                        </div>
                    </div>
                
            </footer>
        `;
    }
};