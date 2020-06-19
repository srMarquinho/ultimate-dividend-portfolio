/**
 *
 *
 */
function defaultType() {
  return 'Index/ETF';
}

/**
 *
 *
 */
function getName(quoteSummary) {
  return sanitize(quoteSummary['price']['longName']);
}

/**
 *
 *
 */
function getExchange(quoteSummary) {
  return quoteSummary['price']['exchange'];
}

/**
 *
 *
 */
function getMarketPrice(quoteSummary) {
  return quoteSummary['price']['regularMarketPrice']['raw'];
}

/**
 *
 *
 */
function getCurrency(quoteSummary) {
  const currency = quoteSummary['price']['currency'];
  if (currency === 'GBp') {
    return 'GBX';
  }
  return currency;
}

/**
 *
 *
 */
function getSector(quoteSummary) {
  const summaryProfile = quoteSummary['summaryProfile'];
  if (!summaryProfile || !summaryProfile['sector']) {
    return defaultType();
  }
  return summaryProfile['sector'];
}

/**
 *
 *
 */
function getIndustry(quoteSummary) {
  const summaryProfile = quoteSummary['summaryProfile'];
  if (!summaryProfile || !summaryProfile['industry']) {
    return defaultType();
  }
  return summaryProfile['industry'];
}

/**
 *
 *
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
 *
 *
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
 *
 *
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
 *
 *
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
 *
 *
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
 *
 *
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
 *
 *
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
