const Stats = {
    render(config = {}) {
        const {
            stats = [
                { number: "10K+", label: "Usuarios Activos" },
                { number: "99.9%", label: "Tiempo de Actividad" },
                { number: "24/7", label: "Soporte Técnico" },
                { number: "5★", label: "Calificación Promedio" }
            ]
        } = config;
        
        const statsHTML = stats.map(stat => `
            <div class="col s12 m3 center-align white-text">
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
        
        return `
                 <h1 class="main-title">
                    Gestiona tu Ganado como un <span style="color: #3ea4f7ff;">Profesional</span>
                </h1>
                
                <p class="subtitle white-text">
                    La aplicación más completa para administrar tu ganado lechero. Controla inventario, salud, producción, 
                    finanzas y genealogía desde cualquier dispositivo. Aumenta tu productividad hasta un 60%.
                </p>
                
                <!-- Stats -->
                <div class="stats">
                    <div class="stat-item">
                        <span class="stat-number">60%</span>
                        <div class="stat-label">Más Productividad</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">1,200+</span>
                        <div class="stat-label">Ganaderos Activos</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">50K+</span>
                        <div class="stat-label">Animales Gestionados</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">99.9%</span>
                        <div class="stat-label">Tiempo Activo</div>
                    </div>
                </div>
        `;
    }
};