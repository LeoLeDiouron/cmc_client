# cmc_client
Client for CoinMarketCap's Api (little tool for a bigger study project).

<h1> JS Client for CoinMarketCap </h1>

<h2> What's that ? </h2>

this client allows to get all of the datas of <a href="https://coinmarketcap.com/">the website coinmarkertcap</a>.

<h2> How i use it ? </h2>

Clone or download the client, and put it in your project.

Include this line in your js file : 
<code>var CMCClient = require("./cmc_client.js").CMCClient;</code> (change the path)

The client can return 3 differents objects :

<ul>
<li>A "CurrencyDatas" if you want the datas of only one specific currency.</li>
<li>A list of "CurrencyDatas" if you want the datas of all (or a part) of the cryptocurrencies.</li>
<li>A "GlobalMarketDatas" if you want the global datas of the market.</li>
</ul>

To know all the attributes of these objects, look the source code (in the folder datas).

You also have access to an example file : "test_client.js".