/**
 * onOpen
 *
 */
function onOpen() {
  addUiItems();
  createAllTriggers();
}

/**
 * addMenu
 *
 */
function addUiItems() {
  SpreadsheetApp
    .getUi()
    .createMenu('PORTFOLIO')
    .addItem('About', 'showWelcome')
    .addItem('Refresh data', 'refreshResourceReq')
    .addItem('Refresh portfolio calculations', 'refreshResourceCalc')
    .addToUi();
}

/**
 * showWelcome
 *
 */
function showWelcome() {
  const url = 'https://raw.githubusercontent.com/srMarquinho/ultimate-dividend-portfolio/master/sidebar/welcome.html';
  const response = UrlFetchApp.fetch(url, { 'muteHttpExceptions': true })
  const htmlString = response.getContentText();

  const html = HtmlService
    .createHtmlOutput(htmlString)
    .setTitle('Ultimate Dividend Portfolio')
    .setWidth(300);

  SpreadsheetApp
    .getUi()
    .showSidebar(html);
}
