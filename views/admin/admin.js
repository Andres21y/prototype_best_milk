import { renderPeople } from 'components/Table_personal.js';
import { renderRecords } from 'components/Table_registro.js';
import { cattleRegistrationForm } from 'components/Cattle_registration_form.js';

document.addEventListener('DOMContentLoaded', function () {
  
  const btnPeople = document.getElementById('btn_people');
  const btnRegisters = document.getElementById('btn_data');
  const btnCRF = document.getElementById('btn_new_cattle_form');
  const renderDiv = document.getElementById('render');

  btnPeople.addEventListener('click', () => {
    renderDiv.innerHTML = '';
    renderDiv.appendChild(renderPeople());
  });

  btnRegisters.addEventListener('click', () => {
    renderDiv.innerHTML = '';
    renderDiv.appendChild(renderRecords());
  });

  btnCRF.addEventListener('click', () => {
    renderDiv.innerHTML = '';
    renderDiv.appendChild(cattleRegistrationForm());
  });

  console.log("ressdd", btnPeople);

  let elems = document.querySelectorAll('.sidenav');
  let options = {}; // define tus opciones si las necesitas
  let instances = M.Sidenav.init(elems, options);

  // Render inicial
  renderDiv.innerHTML = '';
  renderDiv.appendChild(renderPeople());
});



/**
<script type="module">








        // Inicializar el formulario de ganado lechero
        function initializeDairyForm() {
            // Inicializar componentes de Materialize
            setTimeout(() => {
                var selects = document.querySelectorAll('select');
                M.FormSelect.init(selects);

                var tooltips = document.querySelectorAll('.tooltipped');
                M.Tooltip.init(tooltips);

                setupDairyValidation();
            }, 100);
        }

        // Configurar validación específica para ganado lechero
        function setupDairyValidation() {
            const requiredFields = ['cattle_id', 'breed', 'birth_date'];

            requiredFields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (field) {
                    field.addEventListener('blur', function () {
                        validateDairyField(this);
                    });
                }
            });

            // Validación especial para producción lechera
            const productionField = document.getElementById('daily_milk_production');
            if (productionField) {
                productionField.addEventListener('input', function () {
                    validateMilkProduction(this.value);
                });
            }

            // Auto-generar ID cuando se selecciona raza
            const breedField = document.getElementById('breed');
            if (breedField) {
                breedField.addEventListener('change', function () {
                    const cattleIdField = document.getElementById('cattle_id');
                    if (!cattleIdField.value) {
                        cattleIdField.value = generateDairyId(this.value);
                        cattleIdField.classList.add('valid');
                        M.updateTextFields();
                    }
                });
            }
        }

        // Validar campo específico
        function validateDairyField(field) {
            const value = field.value.trim();

            if (field.hasAttribute('required') && !value) {
                field.classList.add('invalid');
                field.classList.remove('valid');
                return false;
            } else if (value) {
                field.classList.add('valid');
                field.classList.remove('invalid');
                return true;
            }
            return true;
        }

        // Validar producción de leche
        function validateMilkProduction(production) {
            const field = document.getElementById('daily_milk_production');
            const value = parseFloat(production);

            if (value && (value < 0 || value > 80)) {
                field.classList.add('invalid');
                showFieldError(field, 'La producción debe estar entre 0 y 80 litros');
            } else if (value) {
                field.classList.add('valid');
                field.classList.remove('invalid');
                removeFieldError(field);
            }
        }

        // Mostrar error en campo
        function showFieldError(field, message) {
            removeFieldError(field);
            const errorMsg = document.createElement('span');
            errorMsg.className = 'error-message red-text';
            errorMsg.textContent = message;
            field.parentNode.appendChild(errorMsg);
        }

        // Remover error de campo
        function removeFieldError(field) {
            const errorMsg = field.parentNode.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        }

        // Generar ID para ganado lechero
        function generateDairyId(breed) {
            const breedCodes = {
                'holstein': 'HOL',
                'jersey': 'JER',
                'brown_swiss': 'BSW',
                'guernsey': 'GUE',
                'ayrshire': 'AYR',
                'shorthorn': 'SHO',
                'normando': 'NOR'
            };

            const prefix = breedCodes[breed] || 'VL';
            const timestamp = Date.now().toString().slice(-3);
            const random = Math.floor(Math.random() * 100).toString().padStart(2, '0');

            return `${prefix}${timestamp}${random}`;
        }

        // Validar formulario completo
        function validateDairyForm() {
            const requiredFields = ['cattle_id', 'breed', 'birth_date'];
            let isValid = true;

            requiredFields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (!validateDairyField(field)) {
                    isValid = false;
                }
            });

            // Validaciones específicas para ganado lechero
            const birthDate = document.getElementById('birth_date').value;
            if (birthDate && new Date(birthDate) > new Date()) {
                document.getElementById('birth_date').classList.add('invalid');
                isValid = false;
            }

            const bodyCondition = document.getElementById('body_condition_score').value;
            if (bodyCondition && (bodyCondition < 1 || bodyCondition > 5)) {
                document.getElementById('body_condition_score').classList.add('invalid');
                isValid = false;
            }

            return isValid;
        }

        // Obtener datos del formulario
        function getDairyFormData() {
            const fields = [
                'cattle_id', 'name', 'breed', 'birth_date', 'weight',
                'reproductive_status', 'last_calving', 'total_calvings',
                'expected_calving', 'insemination_date',
                'daily_milk_production', 'lactation_days', 'peak_production',
                'milk_fat_percentage', 'milk_protein_percentage',
                'health_status', 'last_vaccination', 'body_condition_score',
                'milking_frequency', 'location', 'feeding_system', 'observations'
            ];

            const data = {};

            fields.forEach(field => {
                const element = document.getElementById(field);
                if (element) {
                    data[field] = element.value;
                }
            });

            // Calcular datos adicionales
            if (data.birth_date) {
                const birthDate = new Date(data.birth_date);
                const today = new Date();
                const ageInDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
                data.age_days = ageInDays;
                data.age_months = Math.floor(ageInDays / 30);
                data.age_years = Math.floor(ageInDays / 365);
            }

            // Calcular producción total estimada
            if (data.daily_milk_production && data.lactation_days) {
                data.total_lactation_production = parseFloat(data.daily_milk_production) * parseInt(data.lactation_days);
            }

            // Agregar metadatos
            data.registration_date = new Date().toISOString();
            data.registration_id = 'DAIRY_' + Date.now();
            data.cattle_type = 'dairy';

            return data;
        }

        // Manejar envío del formulario
        function handleDairyFormSubmit(event) {
            event.preventDefault();

            if (!validateDairyForm()) {
                M.toast({ html: 'Por favor, complete todos los campos requeridos correctamente', classes: 'red' });
                return false;
            }

            const dairyData = getDairyFormData();

            // Simular guardado
            console.log('Datos de la vaca lechera registrada:', dairyData);

            // Mostrar mensaje de éxito
            document.getElementById('successMessage').style.display = 'block';
            M.toast({ html: '¡Vaca lechera registrada exitosamente!', classes: 'blue' });

            document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                resetDairyForm();
            }, 4000);

            return dairyData;
        }

        // Limpiar formulario
        function resetDairyForm() {
            const form = document.getElementById('dairyCattleForm');
            if (form) {
                form.reset();
                document.getElementById('successMessage').style.display = 'none';

                const inputs = document.querySelectorAll('input, select, textarea');
                inputs.forEach(input => {
                    input.classList.remove('valid', 'invalid');
                });

                const errorMessages = document.querySelectorAll('.error-message');
                errorMessages.forEach(msg => msg.remove());

                setTimeout(() => {
                    var selects = document.querySelectorAll('select');
                    M.FormSelect.init(selects);
                }, 100);

                M.toast({ html: 'Formulario limpiado', classes: 'blue' });
            }
        }

        // Inicializar aplicación
        document.addEventListener('DOMContentLoaded', function () {
            const dairyForm = cattleRegistrationForm();

            // Insertar HTML en el contenedor
            document.getElementById('app-container').innerHTML = dairyForm.html;

            // Inicializar formulario
            dairyForm.init();

            // Configurar event listeners
            setTimeout(() => {
                const form = document.getElementById('dairyCattleForm');
                if (form) {
                    form.addEventListener('submit', handleDairyFormSubmit);
                }
            }, 200);
        });

    </script>
    <!-- Materialize JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <script>
        // Initialize Materialize components
        document.addEventListener('DOMContentLoaded', function () {
            // Initialize modals
            var modals = document.querySelectorAll('.modal');
            M.Modal.init(modals);

            // Initialize select dropdowns
            var selects = document.querySelectorAll('select');
            M.FormSelect.init(selects);


            // Form submission handler
            document.getElementById('form-nuevo-ganado').addEventListener('submit', function (e) {
                e.preventDefault();

                // Get form data
                const formData = new FormData(this);
                const ganadoData = {};

                for (let [key, value] of formData.entries()) {
                    ganadoData[key] = value;
                }

                // Add timestamp
                ganadoData.fecha_registro = new Date().toISOString();

                // Here you would typically send the data to your backend
                console.log('Datos del ganado a registrar:', ganadoData);

                // Show success message
                M.toast({
                    html: '<i class="material-icons left">check_circle</i>Ganado registrado exitosamente',
                    classes: 'green',
                    displayLength: 4000
                });

                // Close modal and reset form
                var modalInstance = M.Modal.getInstance(document.getElementById('modal-nuevo-ganado'));
                modalInstance.close();
                this.reset();

                // Reinitialize selects after reset
                setTimeout(() => {
                    var selects = document.querySelectorAll('select');
                    M.FormSelect.init(selects);
                }, 100);

                // In a real application, you would make an AJAX call here:
                /*
                fetch('/api/ganado', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(ganadoData)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    // Update the dashboard with new data
                })
                .catch((error) => {
                    console.error('Error:', error);
                    M.toast({html: 'Error al registrar el ganado', classes: 'red'});
                });
                /
            });
        });
    </script>*/