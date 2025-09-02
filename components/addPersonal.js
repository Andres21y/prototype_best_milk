const addPersonal = {
    render() {
        return `<div id="modal-personal" class="modal modal-fixed-footer">
    <div class="modal-content">
        <h4><i class="material-icons left">people</i>Registrar Nuevo Personal</h4>
        <form id="form-personal">
            <div class="row">
                <div class="input-field col s12 m6">
                    <input id="personal-nombre" type="text" class="validate" required>
                        <label for="personal-nombre">Nombre Completo *</label>
                </div>
                <div class="input-field col s12 m6">
                    <input id="personal-cedula" type="text" class="validate" required>
                        <label for="personal-cedula">Cédula *</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m6">
                    <select id="personal-cargo" required>
                        <option value="" disabled selected>Selecciona un cargo</option>
                        <option value="Ordeñador">Ordeñador</option>
                        <option value="Veterinario">Veterinario</option>
                        <option value="Alimentador">Alimentador</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Mantenimiento">Mantenimiento</option>
                    </select>
                    <label>Cargo *</label>
                </div>
                <div class="input-field col s12 m6">
                    <select id="personal-turno" required>
                        <option value="" disabled selected>Selecciona un turno</option>
                        <option value="Mañana">Mañana (6:00 - 14:00)</option>
                        <option value="Tarde">Tarde (14:00 - 22:00)</option>
                        <option value="Noche">Noche (22:00 - 6:00)</option>
                        <option value="Completo">Tiempo Completo</option>
                    </select>
                    <label>Turno *</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m6">
                    <input id="personal-telefono" type="tel" class="validate">
                        <label for="personal-telefono">Teléfono</label>
                </div>
                <div class="input-field col s12 m6">
                    <input id="personal-email" type="email" class="validate">
                        <label for="personal-email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m6">
                    <input id="personal-ingreso" type="date" class="validate" required>
                        <label for="personal-ingreso">Fecha de Ingreso *</label>
                </div>
                <div class="input-field col s12 m6">
                    <input id="personal-salario" type="number" class="validate" min="0" step="0.01">
                        <label for="personal-salario">Salario</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <textarea id="personal-direccion" class="materialize-textarea"></textarea>
                    <label for="personal-direccion">Dirección</label>
                </div>
            </div>
        </form>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-light btn-flat">Cancelar</a>
        <a href="#!" class="waves-effect waves-light btn blue" onclick="guardarPersonal()">
            <i class="material-icons left">save</i>Guardar
        </a>
    </div>
</div>
        `;
    }
};