/**
 * defaultType
 *
 * @returns
 */
function defaultType() {
  return 'Index/ETF';
}

/**
 * getName
 *
 * @param {*} quoteSummary
 * @returns
 */
function getName(quoteSummary) {
  return sanitize(quoteSummary['price']['longName']);
}

/**
 * getExchange
 *
 * @param {*} quoteSummary
 * @returns
 */
function getExchange(quoteSummary) {
  return quoteSummary['price']['exchange'];
}

/**
 * getMarketPrice
 *
 * @param {*} quoteSummary
 * @returns
 */
function getMarketPrice(quoteSummary) {
  return quoteSummary['price']['regularMarketPrice']['raw'];
}

/**
 * getCurrency
 *
 * @param {*} quoteSummary
 * @returns
 */
function getCurrency(quoteSummary) {
  const currency = quoteSummary['price']['currency'];
  if (currency === 'GBp') {
    return 'GBX';
  }
  return currency;
}

/**
 * getSector
 *
 * @param {*} quoteSummary
 * @returns
 */
function getSector(quoteSummary) {
  const summaryProfile = quoteSummary['summaryProfile'];
  if (!summaryProfile || !summaryProfile['sector']) {
    return defaultType();
  }
  return summaryProfile['sector'];
}

/**
 * getIndustry
 *
 * @param {*} quoteSummary
 * @returns
 */
function getIndustry(quoteSummary) {
  const summaryProfile = quoteSummary['summaryProfile'];
  if (!summaryProfile || !summaryProfile['industry']) {
    return defaultType();
  }
  return summaryProfile['industry'];
}

/**
 * getPERatio
 *
 * @param {*} quoteSummary
 * @returns
 */
function getPERatio(quoteSummary) {
  if (
    !quoteSummary['summaryDetail'] ||
    !quoteSummary['summaryDetail']['trailingPE'] ||
    !quoteSummary['summaryDetail']['trailingPE']['raw']
  ) {
    return 'N/A';
  }
  return quoteSummary['summaryDetail']['trailingPE']['raw'];
}

/**
 * getEPS
 *
 * @param {*} quoteSummary
 * @returns
 */
function getEPS(quoteSummary) {
  if (
    !quoteSummary['defaultKeyStatistics'] ||
    !quoteSummary['defaultKeyStatistics']['trailingEps'] ||
    !quoteSummary['defaultKeyStatistics']['trailingEps']['raw']
  ) {
    return 'N/A';
  }
  return quoteSummary['defaultKeyStatistics']['trailingEps']['raw'];
}

/**
 * getDivYield
 *
 * @param {*} quoteSummary
 * @returns
 */
function getDivYield(quoteSummary) {
  if (
    !quoteSummary['summaryDetail'] ||
    !quoteSummary['summaryDetail']['dividendYield'] ||
    !quoteSummary['summaryDetail']['dividendYield']['raw']
  ) {
    return 'N/A';
  }
  return quoteSummary['summaryDetail']['dividendYield']['raw'];
}

/**
 * getDivShare
 *
 * @param {*} quoteSummary
 * @returns
 */
function getDivShare(quoteSummary) {
  if (
    !quoteSummary['summaryDetail'] ||
    !quoteSummary['summaryDetail']['dividendRate'] ||
    !quoteSummary['summaryDetail']['dividendRate']['raw']
  ) {
    return 'N/A';
  }
  return quoteSummary['summaryDetail']['dividendRate']['raw'];
}

/**
 * getExDividendDate
 *
 * @param {*} quoteSummary
 * @returns
 */
function getExDividendDate(quoteSummary) {
  if (
    !quoteSummary['calendarEvents'] ||
    !quoteSummary['calendarEvents']['exDividendDate'] ||
    !quoteSummary['calendarEvents']['exDividendDate']['raw']
  ) {
    return 'N/A';
  }
  const epochSec = quoteSummary['calendarEvents']['exDividendDate']['raw'];
  return new Date(epochSec * 1000);
}

/**
 * getDividendDate
 *
 * @param {*} quoteSummary
 * @returns
 */
function getDividendDate(quoteSummary) {
  if (
    !quoteSummary['calendarEvents'] ||
    !quoteSummary['calendarEvents']['dividendDate'] ||
    !quoteSummary['calendarEvents']['dividendDate']['raw']
  ) {
    return 'N/A';
  }
  const epochSec = quoteSummary['calendarEvents']['dividendDate']['raw'];
  return new Date(epochSec * 1000);
}

/**
 * getBeta5Year
 *
 * @param {*} quoteSummary
 * @returns
 */
function getBeta5Year(quoteSummary) {
  if (
    !quoteSummary['summaryDetail'] ||
    !quoteSummary['summaryDetail']['beta'] ||
    !quoteSummary['summaryDetail']['beta']['raw']
  ) {
    return 'N/A';
  }
  return quoteSummary['summaryDetail']['beta']['raw'];
}
