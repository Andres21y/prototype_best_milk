document.addEventListener('DOMContentLoaded', function () {
    
    M.AutoInit();

    // fx para cargar los componentes
    loadComponent();

    // fx para inicializar los graficos
    initializeCharts();
    
    // listeners para los controles de los graficos
    document.getElementById('chart-period').addEventListener('change', updateCharts);
    document.getElementById('chart-type').addEventListener('change', updateCharts);
});

function loadComponent() {
    setTimeout(() => {
        const sidenavElems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenavElems);
    }, 100);

    document.getElementById('navbar-section').innerHTML = Navbar.render();
    document.getElementById('dashboard-section').innerHTML = Dashboard.render();
    document.getElementById('ganado-section').innerHTML = Gando.render();
    document.getElementById('personal-section').innerHTML = Personal.render();
    document.getElementById('analytic-section').innerHTML = Analytics.render();
    document.getElementById('produccion-section').innerHTML = Production.render();
    document.getElementById('salud-section').innerHTML = Health.render();
    document.getElementById('alimentacion-section').innerHTML = Feed.render();
    document.getElementById('config-section').innerHTML = Config.render();
    document.getElementById('reportes-section').innerHTML = Reports.render();
}

// fx cambiar de vista
function showSection(sectionName) {
    
    // desactivar todas las seciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // mostrar seción activa
    const activeSection = document.getElementById(sectionName + '-section');
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // notificación
    M.toast({ html: `${getSectionTitle(sectionName)}`, classes: 'green' });
}

// fx cambiar de vista
function showlogout() {
    var instance = M.Modal.getInstance(document.getElementById('modal-logout'));
    instance.open();
}

// fx para terminar sesión
function logout() {

    var instance = M.Modal.getInstance(document.getElementById('modal-logout'));
    instance.close();

    // notificación
    M.toast({ html: 'Cerrando sesión...', classes: 'orange' });


    setTimeout(function () {
        window.location.href = '/';
    }, 1000);
}

function getSectionTitle(sectionName) {
    const titles = {
        'dashboard': 'Dashboard',
        'personal': 'Gestión de Personal',
        'ganado': 'Registro de Ganado',
        'produccion': 'Control de Producción',
        'salud': 'Salud Veterinaria',
        'alimentacion': 'Control de Alimentación',
        'reportes': 'Reportes y Análisis',
        'config': 'Configuración'
    };
    return titles[sectionName] || sectionName;
}


function addPersonal() {
    var instance = M.Modal.getInstance(document.getElementById('modal-personal'));
    instance.open();
 
    document.getElementById('form-personal').reset();
    M.updateTextFields();
}

function addGanado() {
    var instance = M.Modal.getInstance(document.getElementById('modal-ganado'));
    instance.open();

    document.getElementById('form-ganado').reset();
    M.updateTextFields();
}

// fx para guardar ganado
function guardarGanado() {
    const form = document.getElementById('form-ganado');
    if (form.checkValidity()) {

        const ganado = {
            id: document.getElementById('ganado-id').value,
            nombre: document.getElementById('ganado-nombre').value,
            raza: document.getElementById('ganado-raza').value,
            sexo: document.getElementById('ganado-sexo').value,
            nacimiento: document.getElementById('ganado-nacimiento').value,
            peso: document.getElementById('ganado-peso').value,
            madre: document.getElementById('ganado-madre').value,
            padre: document.getElementById('ganado-padre').value,
            observaciones: document.getElementById('ganado-observaciones').value
        };


        const birthDate = new Date(ganado.nacimiento);
        const today = new Date();
        const age = Math.floor((today - birthDate) / (365.25 * 24 * 60 * 60 * 1000));

  
        const tbody = document.querySelector('#ganado-section tbody');
        const newRow = tbody.insertRow();
        newRow.innerHTML = `
                    <td>${ganado.id}</td>
                    <td>${ganado.nombre}</td>
                    <td>${ganado.raza}</td>
                    <td>${age} años</td>
                    <td>0.0</td>
                    <td><span class="green-text">Saludable</span></td>
                    <td>
                        <i class="material-icons tiny">visibility</i>
                        <i class="material-icons tiny">edit</i>
                    </td>
                `;

        var instance = M.Modal.getInstance(document.getElementById('modal-ganado'));
        instance.close();

        M.toast({ html: `Ganado ${ganado.nombre} registrado exitosamente`, classes: 'green' });

        updateGanadoCount();
    } else {
        M.toast({ html: 'Por favor completa todos los campos requeridos', classes: 'red' });
    }
}

// fx para guardar personal
function guardarPersonal() {
    const form = document.getElementById('form-personal');
    if (form.checkValidity()) {
 
        const personal = {
            nombre: document.getElementById('personal-nombre').value,
            cedula: document.getElementById('personal-cedula').value,
            cargo: document.getElementById('personal-cargo').value,
            turno: document.getElementById('personal-turno').value,
            telefono: document.getElementById('personal-telefono').value,
            email: document.getElementById('personal-email').value,
            ingreso: document.getElementById('personal-ingreso').value,
            salario: document.getElementById('personal-salario').value,
            direccion: document.getElementById('personal-direccion').value
        };

        const tbody = document.querySelector('#personal-section tbody');
        const newRow = tbody.insertRow();
        newRow.innerHTML = `
                    <td>${personal.nombre}</td>
                    <td>${personal.cargo}</td>
                    <td>${personal.turno}</td>
                    <td><span class="green-text">Activo</span></td>
                    <td>
                        <i class="material-icons tiny">edit</i>
                        <i class="material-icons tiny">delete</i>
                    </td>
                `;

        var instance = M.Modal.getInstance(document.getElementById('modal-personal'));
        instance.close();

        M.toast({ html: `Personal ${personal.nombre} registrado exitosamente`, classes: 'green' });

        updatePersonalCount();
    } else {
        M.toast({ html: 'Por favor completa todos los campos requeridos', classes: 'red' });
    }
}

// Function to update ganado count
function updateGanadoCount() {
    const rows = document.querySelectorAll('#ganado-section tbody tr');
    const count = rows.length;
    const ganadoStat = document.querySelector('.stats-card.green h4');
    if (ganadoStat) {
        ganadoStat.textContent = count;
    }
}

// Function to update personal count
function updatePersonalCount() {
    const rows = document.querySelectorAll('#personal-section tbody tr');
    const count = rows.length;
    const personalStat = document.querySelector('.stats-card.orange h4');
    if (personalStat) {
        personalStat.textContent = count;
    }
}


function updateStats() {
    const statsElements = document.querySelectorAll('.stats-card h4');
    statsElements.forEach(element => {
        const currentValue = parseInt(element.textContent.replace(/,/g, ''));
        const variation = Math.floor(Math.random() * 10) - 5; 
        const newValue = Math.max(0, currentValue + variation);

        if (element.textContent.includes(',')) {
            element.textContent = newValue.toLocaleString();
        } else {
            element.textContent = newValue;
        }
    });
}

//actualizar stats cada 30 segundos
setInterval(updateStats, 30000);


document.addEventListener('click', function (e) {
    if (e.target.classList.contains('material-icons')) {
        const action = e.target.textContent;
        let message = '';

        switch (action) {
            case 'edit':
                message = 'Abriendo editor...';
                break;
            case 'delete':
                message = '¿Confirmar eliminación?';
                break;
            case 'visibility':
                message = 'Mostrando detalles...';
                break;
            default:
                message = 'Acción ejecutada';
        }

        M.toast({ html: message, classes: 'orange' });
    }
});


let startX = 0;
let startY = 0;

document.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', function (e) {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
            M.toast({ html: 'Desliza hacia la derecha para volver al dashboard', classes: 'blue' });
        } else {
            showSection('dashboard');
        }
    }
});

// seción analítica

let lineChart, polarChart, barChart, doughnutChart;

// inicializar los grraficos
function initializeCharts() {
    createLineChart();
    createPolarChart();
    createBarChart();
    createDoughnutChart();
}

// Line Chart - producción
function createLineChart() {
    const element = document.getElementById('lineChart').getContext('2d');
    const data = generateProductionData();

    lineChart = new Chart(element, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Producción Diaria (L)',
                data: data.values,
                borderColor: '#62e0ffff',
                backgroundColor: 'rgba(100, 235, 240, 0.55)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Litros'
                    }
                }
            },
            layout: {
                padding: 10
            }
        }
    });
}

// Polar Chart - distribución por razas
function createPolarChart() {
    const element = document.getElementById('polarChart').getContext('2d');

    polarChart = new Chart(element, {
        type: 'polarArea',
        data: {
            labels: ['Holstein', 'Jersey', 'Angus', 'Brahman', 'Simmental'],
            datasets: [{
                data: [45, 25, 15, 10, 5],
                backgroundColor: [
                    '#4caf50',
                    '#2196f3',
                    '#ff9800',
                    '#f44336',
                    '#9c27b0'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            layout: {
                padding: 10
            }
        }
    });
}

// Bar Chart - producción semanal
function createBarChart() {
    const element = document.getElementById('barChart').getContext('2d');

    barChart = new Chart(element, {
        type: 'bar',
        data: {
            labels: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
            datasets: [{
                label: 'Producción (L)',
                data: [2340, 2280, 2450, 2380, 2420, 2200, 2150],
                backgroundColor: [
                    '#4caf50',
                    '#2196f3',
                    '#ff9800',
                    '#f44336',
                    '#9c27b0',
                    '#607d8b',
                    '#795548'
                ],
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Litros'
                    }
                }
            },
            layout: {
                padding: 10
            }
        }
    });
}

// Doughnut Chart - estado de salud
function createDoughnutChart() {
    const element = document.getElementById('doughnutChart').getContext('2d');

    doughnutChart = new Chart(element, {
        type: 'doughnut',
        data: {
            labels: ['Saludable', 'En Revisión', 'Tratamiento', 'Recuperación'],
            datasets: [{
                data: [85, 8, 4, 3],
                backgroundColor: [
                    '#4caf50',
                    '#ff9800',
                    '#f44336',
                    '#2196f3'
                ],
                borderWidth: 3,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            cutout: '60%',
            layout: {
                padding: 10
            }
        }
    });
}

// Generate sample production data
function generateProductionData() {
    const period = document.getElementById('chart-period').value;
    const days = parseInt(period);
    const labels = [];
    const values = [];

    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString('es-ES', { month: 'short', day: 'numeric' }));

        // generar ramdon data
        const baseProduction = 2300;
        const variation = Math.random() * 400 - 200; // ±200L variation
        values.push(Math.round(baseProduction + variation));
    }

    return { labels, values };
}

// fx de actualizar graficos al filtrar 
function updateCharts() {
    const period = document.getElementById('chart-period').value;
    const type = document.getElementById('chart-type').value;


    const newData = generateProductionData();
    lineChart.data.labels = newData.labels;
    lineChart.data.datasets[0].data = newData.values;

    switch (type) {
        case 'production':
            lineChart.data.datasets[0].label = 'Producción Diaria (L)';
            break;
        case 'health':
            lineChart.data.datasets[0].label = 'Índice de Salud';
            break;
        case 'feed':
            lineChart.data.datasets[0].label = 'Consumo de Alimento (kg)';
            break;
        case 'performance':
            lineChart.data.datasets[0].label = 'Rendimiento Promedio (L/vaca)';
            break;
    }

    lineChart.update();

    M.toast({ html: `Gráficos actualizados para ${period} días`, classes: 'blue' });
}
