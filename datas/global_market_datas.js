class GlobalMarketDatas {
    constructor(datas) {
        this.marketcap = datas["total_market_cap_usd"];
        this.volume_day = datas["total_24h_volume_usd"];
        this.bitcoin_perc = datas["bitcoin_percentage_of_market_cap"];
        this.active_currencies = datas["active_currencies"];
        this.active_assets = datas["active_assets"];
        this.active_markets = datas["active_markets"];
        this.last_updated = datas["last_updated"];
    }
}

exports.GlobalMarketDatas = GlobalMarketDatas;