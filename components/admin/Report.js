const Report = {
    render() {
        return ` 
         <div class="card">
                <div class="card-content">
                    <span class="card-title">
                        <i class="material-icons left">assessment</i>
                        Reportes y Análisis
                    </span>

                    <div class="row">
                        <div class="col s12 m6 l4">
                            <button class="btn waves-effect waves-light blue" style="width: 100%; margin-bottom: 10px;">
                                <i class="material-icons left">trending_up</i>
                                Reporte Producción
                            </button>
                        </div>
                        <div class="col s12 m6 l4">
                            <button class="btn waves-effect waves-light green"
                                style="width: 100%; margin-bottom: 10px;">
                                <i class="material-icons left">pets</i>
                                Reporte Ganado
                            </button>
                        </div>
                        <div class="col s12 m6 l4">
                            <button class="btn waves-effect waves-light orange"
                                style="width: 100%; margin-bottom: 10px;">
                                <i class="material-icons left">attach_money</i>
                                Reporte Financiero
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}