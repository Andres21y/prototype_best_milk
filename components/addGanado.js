const addGanado = {
    render() {
        return `
   <div id="modal-ganado" class="modal modal-fixed-footer">
    <div class="modal-content">
        <h4><i class="material-icons left">pets</i>Registrar Nuevo Ganado</h4>
        <form id="form-ganado">
            <div class="row">
                <div class="input-field col s12 m6">
                    <input id="ganado-id" type="text" class="validate" required>
                        <label for="ganado-id">ID del Ganado *</label>
                </div>
                <div class="input-field col s12 m6">
                    <input id="ganado-nombre" type="text" class="validate" required>
                        <label for="ganado-nombre">Nombre *</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m6">
                    <select id="ganado-raza" required>
                        <option value="" disabled selected>Selecciona una raza</option>
                        <option value="Holstein">Holstein</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Angus">Angus</option>
                        <option value="Brahman">Brahman</option>
                        <option value="Simmental">Simmental</option>
                        <option value="Charolais">Charolais</option>
                    </select>
                    <label>Raza *</label>
                </div>
                <div class="input-field col s12 m6">
                    <select id="ganado-sexo" required>
                        <option value="" disabled selected>Selecciona el sexo</option>
                        <option value="Hembra">Hembra</option>
                        <option value="Macho">Macho</option>
                    </select>
                    <label>Sexo *</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m6">
                    <input id="ganado-nacimiento" type="date" class="validate" required>
                        <label for="ganado-nacimiento">Fecha de Nacimiento *</label>
                </div>
                <div class="input-field col s12 m6">
                    <input id="ganado-peso" type="number" class="validate" min="0" step="0.1">
                        <label for="ganado-peso">Peso (kg)</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m6">
                    <input id="ganado-madre" type="text" class="validate">
                        <label for="ganado-madre">ID de la Madre</label>
                </div>
                <div class="input-field col s12 m6">
                    <input id="ganado-padre" type="text" class="validate">
                        <label for="ganado-padre">ID del Padre</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <textarea id="ganado-observaciones" class="materialize-textarea"></textarea>
                    <label for="ganado-observaciones">Observaciones</label>
                </div>
            </div>
        </form>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-light btn-flat">Cancelar</a>
        <a href="#!" class="waves-effect waves-light btn green" onclick="guardarGanado()">
            <i class="material-icons left">save</i>Guardar
        </a>
    </div>
    </div>

       `;
    }
};
