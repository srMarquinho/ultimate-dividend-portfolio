/**
 * getResource
 *
 */
function getResource(ticker) {
  const stores = getStores(ticker);
  const quoteSummary = stores['QuoteSummaryStore'];

  return [[
    getName(quoteSummary),
    getExchange(quoteSummary),
    getMarketPrice(quoteSummary),
    getCurrency(quoteSummary),
    getSector(quoteSummary),
    getIndustry(quoteSummary),
    getPERatio(quoteSummary),
    getEPS(quoteSummary),
    getDivYield(quoteSummary),
    getDivShare(quoteSummary),
    getExDividendDate(quoteSummary),
    getDividendDate(quoteSummary),
    getBeta5Year(quoteSummary)
  ]];
}

/**
 * getStores
 *
 */
function getStores(ticker) {
  try {
    const date = new Date();
    const millisToAvoidCache = date.getTime();
    const url = 'https://finance.yahoo.com/quote/' + ticker + '?millisToAvoidCache=' + millisToAvoidCache;
    const response = UrlFetchApp.fetch(url, { 'muteHttpExceptions': true });
    const htmlString = response.getContentText();
    const regex = new RegExp(/root.App.main = \{.*\:\{.*\:.*\}\}/g);
    const match = regex.exec(htmlString);
    const appString = match[0].substring(16);
    const appJson = JSON.parse(appString);
    return appJson['context']['dispatcher']['stores'];
  } catch (err) {
    // throw new Error('\'' + ticker + '\'' + ' is invalid or request has failed (try reloading the page).');
    return Logger.log(err);
  }
}
