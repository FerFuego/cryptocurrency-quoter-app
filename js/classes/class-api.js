class API {

    constructor() {
        this.api_url_data = 'https://min-api.cryptocompare.com/data/pricemultifull?';
        this.api_url_crypto = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    }

    async getCryptos() {
        try {
            const response = await fetch(`${this.api_url_crypto}`);
            const result   = await response.json();
            return result;
        } catch (error) {
           return error;
        }
    }

    async getData(cryto, currency) {
        try {
            const response = await fetch(`${this.api_url_data}fsyms=${cryto}&tsyms=${currency}`);
            const result   = await response.json();
            return result;
        } catch (error) {
           return error;
        }
    }
}

export default API;