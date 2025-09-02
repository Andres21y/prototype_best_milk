const Health ={
    render(){
        return `
       
            <div class="card">
                <div class="card-content">
                    <span class="card-title">
                        <i class="material-icons left">healing</i>
                        Salud Veterinaria
                    </span>

                    <div class="row">
                        <div class="col s12">
                            <div class="card  white black-text">
                                <div class="card-content">
                                    <h6>Alertas Activas</h6>
                                    <ul class="collection">
                                        <li class="collection-item">Vaca #003 - Revisión programada</li>
                                        <li class="collection-item">Vaca #015 - Vacunación pendiente</li>
                                        <li class="collection-item">Vaca #028 - Control reproductivo</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        `;
    }
}