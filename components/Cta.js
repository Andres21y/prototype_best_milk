const Cta = {
    render(config = {}) {
        const {
            title = "¿Listo para comenzar?",
            subtitle = "Únete a miles de usuarios que ya confían en nuestra plataforma",
            primaryBtn = "Crear Cuenta Gratis",
            secondaryBtn = "Ver Demo"
        } = config;
        
        return `
            <section class="cta-section white-text valign-wrapper" style="height:400px">
                <div class="container valign">
                    <div class="row">
                        <div class="col s12 center-align">
                            <h2 class="section-title">${title}</h2>
                            <p class="hero-subtitle">${subtitle}</p>
                            
                            <div class="cta-buttons">
                                <a href="#" onclick="navigateTo('signup')" class="btn-large btn-large-custom white indigo-text waves-effect waves-light">
                                    ${primaryBtn}
                                </a>
                                <a href="#" onclick="showDemo()" class="btn-large btn-large-custom transparent white-text waves-effect waves-light" style="border: 2px solid white;">
                                    ${secondaryBtn}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="divider"></div>
                </div>
            </section>
        `;
    }
};