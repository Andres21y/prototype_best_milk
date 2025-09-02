const Analytics = {
    
    render() {
        return `

    <div class="col s12">
        <div class="card">
            <div class="card-content">
                <span class="card-title">
                    <i class="material-icons left">analytics</i>
                    Análisis y Gráficos
                </span>

                <!-- Chart Controls -->
                <div class="row chart_control">
                    <div class="col s12 m6 ">
                        <div class="input-field">
                            <select id="chart-period">
                                <option value="7" >Últimos 7 días</option>
                                <option value="30" selected>Últimos 30 días</option>
                                <option value="90">Últimos 3 meses</option>
                                <option value="365">Último año</option>
                            </select>
                            <label>Período de Análisis</label>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="input-field">
                            <select id="chart-type">
                                <option value="production" selected>Producción de Leche</option>
                                <option value="health">Estado de Salud</option>
                                <option value="feed">Consumo de Alimento</option>
                                <option value="performance">Rendimiento por Vaca</option>
                            </select>
                            <label>Tipo de Análisis</label>
                        </div>
                    </div>
                </div>

                <!-- Charts Grid -->
                <div class="row">
                    <!-- Line Chart -->
                    <div class="col s12 ">
                        <div class="card white black-text">
                            <div class="card-content">
                                <span class="card-title">Tendencia de Producción</span>
                                <div style="position: relative; height: 250px; width: 100%;">
                                    <canvas id="lineChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                    
                <div class="row">

                    <!-- Polar Chart -->
                    <div class="col s12 l6">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Distribución por Raza</span>
                                <div style="position: relative; height: 400px; width: 100%;">
                                    <canvas id="polarChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bar Chart -->
                    <div class="col s12 l6">
                        <div class="card white">
                            <div class="card-content">
                                <span class="card-title">Producción Semanal</span>
                                <div style="position: relative; height: 400px; width: 100%;">
                                    <canvas id="barChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Doughnut Chart -->
                    <div class="col s12 l6">
                        <div class="card white">
                            <div class="card-content">
                                <span class="card-title">Estado de Salud</span>
                                <div style="position: relative; height: 400px; width: 100%;">
                                    <canvas id="doughnutChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- KPI Cards -->
                <div class="row">
                    <div class="col s6 m3">
                        <div class="card-panel teal lighten-2 white-text center">
                            <i class="material-icons medium">trending_up</i>
                            <h6>Crecimiento</h6>
                            <h4>+12.5%</h4>
                            <p>vs mes anterior</p>
                        </div>
                    </div>
                    <div class="col s6 m3">
                        <div class="card-panel purple lighten-2 white-text center">
                            <i class="material-icons medium">speed</i>
                            <h6>Eficiencia</h6>
                            <h4>94.2%</h4>
                            <p>promedio general</p>
                        </div>
                    </div>
                    <div class="col s6 m3">
                        <div class="card-panel indigo lighten-2 white-text center">
                            <i class="material-icons medium">star</i>
                            <h6>Calidad</h6>
                            <h4>A+</h4>
                            <p>certificación</p>
                        </div>
                    </div>
                    <div class="col s6 m3">
                        <div class="card-panel pink lighten-2 white-text center">
                            <i class="material-icons medium">savings</i>
                            <h6>Ahorro</h6>
                            <h4>$2,450</h4>
                            <p>este mes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
    }
};