const Footer = {
    render(config = {}) {
        const {
            brandName = "<img class=responsive-img src=assets/images/best_milk_main.png>",
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
                        { text: "Terminos y condiciones", href: "#", onclick: "navigateTo('Terms')" },
                        { text: "Política de  privacidad", href: "#", onclick: "navigateTo('Politicy')" },
                        { text: "Social", href: "#", onclick: "navigateTo('Social')" }
                    ]
                }
            ],
            copyright = "© 2025 bestmilk. Todos los derechos reservados - grupo A."
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
            <footer class="footer_section white-text">

                <div class="container footer">
                    <div class="row">
                        <div class="col s12 m3">
                            <h5 class="brand-logo">${brandName}</h5>
                        </div>
                        ${sectionsHTML}
                    </div>
                </div>

                <div class="divider grey"></div>
                
                <div class="footer_copyright">
                    <div class="container center-align">
                        <span class="grey-text text-lighten-1">${copyright}</span>
                    </div>
                </div>
            </footer>
        `;
    }
};