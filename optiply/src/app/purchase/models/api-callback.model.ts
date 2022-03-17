export class APICallback {

    constructor(public symbol: string, public lastPrice: string, public priceChange: string, public priceChangePercent: string, public highPrice: string, public lowPrice: string) {}
    //[{"symbol":"ETHBTC","priceChange":"-0.00010200","priceChangePercent":"-0.154","lastPrice":"0.06629000","highPrice":"0.06721600","lowPrice":"0.06572100"},
}
