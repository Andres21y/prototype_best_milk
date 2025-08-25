const Features = {
    render(config = {}) {
        const {
            title = "¿Por qué elegir BestMilk?",
            subtitle = "Descubre las características que hacen de nuestra plataforma la mejor opción para tu negocio",
            features = [
                {
                    icon: "flash_on",
                    title: "Rápido y Eficiente",
                    description: "Optimizado para ofrecer la mejor experiencia de usuario con tiempos de carga mínimos"
                },
                {
                    icon: "security",
                    title: "Seguro y Confiable", 
                    description: "Tus datos están protegidos con los más altos estándares de seguridad"
                },
                {
                    icon: "devices",
                    title: "Responsive",
                    description: "Funciona perfectamente en todos los dispositivos, desde móviles hasta desktop"
                }
            ]
        } = config;
        
        const featuresHTML = features.map(feature => `
            <div class="col s12 m4">
                <div class="card card-hover hoverable">
                    <div class="card-content center-align">
                        <i class="material-icons feature-icon">${feature.icon}</i>
                        <h5 class="grey-text text-darken-3">${feature.title}</h5>
                        <p class="grey-text">${feature.description}</p>
                    </div>
                </div>
            </div>
        `).join('');
        
        return `
            <section class="section white">
                <div class="container">
                    <div class="row">
                        <div class="col s12 center-align">
                            <h2 class="section-title grey-text text-darken-3">${title}</h2>
                            <p class="section-subtitle">${subtitle}</p>
                        </div>
                    </div>
                    <div class="row">
                        ${featuresHTML}
                    </div>
                </div>
            </section>
        `;
    }
};