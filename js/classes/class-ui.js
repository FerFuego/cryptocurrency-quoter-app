class UI {

    getItemSelected(data) {
        let html = '';
        data.then(result => {
            html += `<option value="">Elige tu criptomoneda</option>`;
            html += `<option value="USDT">USDT</option>`;
            result.Data.forEach(coin => {
                html += `<option value="${coin.CoinInfo.Name}">${coin.CoinInfo.FullName}</option>`;
            });
            document.querySelector('#criptomonedas').innerHTML = html;
        });
    }

    showInfo(data, cripto, currency) {
        let html = '';
        data.then(coin => {
            const {PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, LASTUPDATE} = coin.DISPLAY[cripto][currency];
            html += `
                <table class="u-full-width">
                <tr>
                    <td>${cripto} precio</td>
                    <td>${PRICE}</td>
                </tr>
                <tr>
                    <td>Mas alto del dia</td>
                    <td>${HIGHDAY}</td>
                </tr>
                <tr>
                    <td>Mas bajo del dia</td>
                    <td>${LOWDAY}</td>
                </tr>
                <tr>
                    <td>Variación 24hs</td>
                    <td>${CHANGE24HOUR}</td>
                </tr>
                <tr>
                    <td>Ultima actualización</td>
                    <td>${LASTUPDATE}</td>
                </tr>
                </table>
            `;
            document.querySelector('#resultado').innerHTML = html;
        });
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        if (cssClass === 'error') {
            div.classList.add(cssClass, 'd-message', 'text-white', 'p-3', 'mt-5', 'text-center', 'font-bold');
        } else {
            div.classList.add('d-message', 'text-white', 'p-3', 'mt-5', 'text-center', 'font-bold');
        }
        div.innerHTML = `${message}`;
        const form = document.querySelector('#formulario');
            form.appendChild(div);
        setTimeout(() => {
            document.querySelector('.d-message').remove();
        }, 3000);
    }

}

export default UI;