var CMCClient = require("./cmc_client.js").CMCClient;

var cmc_client = new CMCClient();

// test de la fonction getInfosCurrency
cmc_client.getInfosCurrency("bitcoin", function(currency_datas) {
    console.log("Test of the function : getInfosCurrency...");
    if (currency_datas != null)
        console.log("Bitcoin's marketcap is " + currency_datas.marketcap + " dollars.");
    else
        console.log("Cryptocurrency not found.");
});

// test de la fonction getInfosCurrency
cmc_client.getInfosAllCurrency(10, function(all_currency_datas) {
    console.log("Test of the function : getInfosAllCurrency...");
    if (all_currency_datas != null)
        for (var idx = 0; idx < all_currency_datas.length; idx++)
            console.log(all_currency_datas[idx].name + "'s marketcap is " + all_currency_datas[idx].marketcap + " dollars.");
    else
        console.log("List of cryptocurrencies not found.")
});

// test de la fonction getInfosCurrency
cmc_client.getInfosGlobalMarket(function(global_datas) {
    console.log("Test of the function : getInfosGlobalMarket...");
    if (global_datas != null)
        console.log("Global market's marketcap is " + global_datas.marketcap + " dollars.");
    else
        console.log("Global Datas not found.");
});

