var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var CurrencyDatas = require("./currency_datas.js").CurrencyDatas;
var GlobalMarketDatas = require("./global_market_datas.js").GlobalMarketDatas;

class CMCClient {

    constructor() {
    }

    async getInfosCurrency(id, callback) {
        var url = "https://api.coinmarketcap.com/v1/ticker/" + id + "/";

        await this.httpGetAsync(url, function(responseText){
            if (responseText != "" && responseText.search("error") == -1)
                callback(new CurrencyDatas(JSON.parse(responseText)[0]));
            else
                callback(null);
        });
    }

    async getInfosAllCurrency(limit=0, callback) {
        var url = "https://api.coinmarketcap.com/v1/ticker/";
        var this_tmp = this;

        await this.httpGetAsync(url, function(responseText){
            if (limit < 1000 && responseText != "" && responseText.search("error") == -1)
                callback(this_tmp.getArrayInfosCurrency(responseText, limit));
            else
                callback(null);
        });
    }

    async getInfosGlobalMarket(callback) {
        var url = "https://api.coinmarketcap.com/v1/global/";

        await this.httpGetAsync(url, function(responseText){
            if (responseText != "" && responseText.search("error") == -1)
                callback(new GlobalMarketDatas(JSON.parse(responseText)));
            else
                callback(null);
        });
    }

    getArrayInfosCurrency(responseText, limit) {
        var all_currency_datas = [];
        var datas_parded = JSON.parse(responseText);

        for (var idx = 0; idx < datas_parded.length && (idx < limit || limit == 0); idx++)
            all_currency_datas.push(new CurrencyDatas(datas_parded[idx]));
        return all_currency_datas;
    }

    async httpGetAsync(url, callback) {
        var xmlHttp = new XMLHttpRequest();
            
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);                    
        }
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    }
}

exports.CMCClient = CMCClient;

