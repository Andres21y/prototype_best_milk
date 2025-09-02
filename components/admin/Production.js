const Production = {
    render() {
        return `
<div class="card">
                <div class="card-content">
                    <span class="card-title">
                        <i class="material-icons left">local_drink</i>
                        Control de Producción
                    </span>

                    <div class="row">
                        <div class="col s12 m6">
                            <div class="card blue accent-1">
                                <div class="card-content">
                                    <h6>Producción Diaria</h6>
                                    <h4>2,340 L</h4>
                                    <p>+5.2% vs ayer</p>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m6">
                            <div class="card teal accent-3">
                                <div class="card-content">
                                    <h6>Promedio por Vaca</h6>
                                    <h4>15.8 L</h4>
                                    <p>Dentro del rango normal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        `;
    }
};

