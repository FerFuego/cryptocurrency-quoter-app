import UI from './classes/class-ui.js';
import API from './classes/class-api.js';

const ui = new UI();
const api = new API();

document.addEventListener('DOMContentLoaded', () => {
    // Insertar Criptomonedas al cargar el DOM
    ui.getItemSelected(api.getCryptos());

    // Eventos
    document.addEventListener('submit', e => {
        e.preventDefault();
        const currency = document.querySelector('#moneda').value;
        const cripto = document.querySelector('#criptomonedas').value;

        // Validar campos
        if(currency === '' || cripto === '') {
            // Mostrar Error
            ui.showMessage('Ambos campos son obligatorios', 'error');
            return;
        }

        // Show result
        ui.showMessage('Cotizando...', 'spinner');
        const data = api.getData(cripto, currency);
        ui.showInfo(data, cripto, currency);
    });
});