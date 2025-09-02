const Personal = {
    render() {
        return `
    <div class="card">
        <div class="card-content">
            <div class="row valign-wrapper">
                <div class="col s8">
                    <span class="card-title">
                        <i class="material-icons left">people</i>
                        Gestión de Personal
                    </span>
                </div>
                <div class="col s4 right-align">
                    <button class="btn-floating btn-large green waves-effect waves-light" onclick="addPersonal()">
                        <i class="material-icons">add</i>
                    </button>
                </div>
            </div>

            <div class="data-table">
                <table class="">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cargo</th>
                            <th>Turno</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Juan Pérez</td>
                            <td>Ordeñador</td>
                            <td>Mañana</td>
                            <td><span class="green-text">Activo</span></td>
                            <td>
                                <i class="material-icons tiny">edit</i>
                                <i class="material-icons tiny">delete</i>
                            </td>
                        </tr>
                        <tr>
                            <td>María González</td>
                            <td>Veterinaria</td>
                            <td>Completo</td>
                            <td><span class="green-text">Activo</span></td>
                            <td>
                                <i class="material-icons tiny">edit</i>
                                <i class="material-icons tiny">delete</i>
                            </td>
                        </tr>
                        <tr>
                            <td>Carlos Ruiz</td>
                            <td>Alimentador</td>
                            <td>Tarde</td>
                            <td><span class="orange-text">Licencia</span></td>
                            <td>
                                <i class="material-icons tiny">edit</i>
                                <i class="material-icons tiny">delete</i>
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

