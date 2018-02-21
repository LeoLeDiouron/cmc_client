class CurrencyDatas {
    constructor(datas) {
        this.id = datas["id"];
        this.name = datas["name"];
        this.symbol = datas["symbol"];
        this.rank = datas["rank"];
        this.price_usd = datas["price_usd"];
        this.price_btc = datas["price_btc"];
        this.volume = datas["24h_volume_usd"];
        this.marketcap = datas["market_cap_usd"];
        this.available_supply = datas["available_supply"];
        this.total_supply = datas["total_supply"];
        this.max_supply = datas["max_supply"];
        this.change_hour =  datas["percent_change_1h"];
        this.change_day = datas["percent_change_24h"];
        this.change_week = datas["percent_change_7d"];
        this.last_updated = datas["last_updated"];
    }
}

exports.CurrencyDatas = CurrencyDatas;