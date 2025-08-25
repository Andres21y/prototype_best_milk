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
            <section class="stats-section">
                <div class="container">
                    <div class="row">
                        ${statsHTML}
                    </div>
                </div>
            </section>
        `;
    }
};