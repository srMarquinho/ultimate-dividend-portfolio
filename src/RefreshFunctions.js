/**
 * refreshResourceReq
 *
 */
function refreshResourceReq() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('_resourceReq');
  const cell = sheet.getRange('A2');
  const formula = cell.getFormula();
  cell.setFormula(null);
  SpreadsheetApp.flush();
  cell.setFormula(formula);
}

/**
 * refreshResourceCalc
 *
 */
function refreshResourceCalc() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('_resourceCalc');
  const cell = sheet.getRange('A2');
  const formula = cell.getFormula();
  cell.setFormula(null);
  SpreadsheetApp.flush();
  cell.setFormula(formula);
}
