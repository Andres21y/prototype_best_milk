const Gando = {
    render() {
        return `
   
            <div class="card">
                <div class="card-content">
                    <div class="row valign-wrapper">
                        <div class="col s8">
                            <span class="card-title">
                                <i class="material-icons left">pets</i>
                                Registro de Ganado
                            </span>
                        </div>
                        <div class="col s4 right-align">
                            <button class="btn-floating btn-large blue waves-effect waves-light" onclick="addGanado()">
                                <i class="material-icons">add</i>
                            </button>
                        </div>
                    </div>

                    <div class="data-table">
                        <table class="">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Raza</th>
                                    <th>Edad</th>
                                    <th>Producción (L/día)</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Bella</td>
                                    <td>Holstein</td>
                                    <td>4 años</td>
                                    <td>25.5</td>
                                    <td><span class="green-text">Saludable</span></td>
                                    <td>
                                        <i class="material-icons tiny">visibility</i>
                                        <i class="material-icons tiny">edit</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>002</td>
                                    <td>Luna</td>
                                    <td>Jersey</td>
                                    <td>3 años</td>
                                    <td>18.2</td>
                                    <td><span class="green-text">Saludable</span></td>
                                    <td>
                                        <i class="material-icons tiny">visibility</i>
                                        <i class="material-icons tiny">edit</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>003</td>
                                    <td>Estrella</td>
                                    <td>Holstein</td>
                                    <td>5 años</td>
                                    <td>22.8</td>
                                    <td><span class="orange-text">Revisión</span></td>
                                    <td>
                                        <i class="material-icons tiny">visibility</i>
                                        <i class="material-icons tiny">edit</i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        `;
    }
};