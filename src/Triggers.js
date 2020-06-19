/**
 * deleteAllTriggers
 *
 */
function deleteAllTriggers() {
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach((trigger) => {
    ScriptApp.deleteTrigger(trigger);
  });
}

/**
 * createTriggers
 *
 */
function createAllTriggers() {
  deleteAllTriggers();
  createShowWelcome();
}

/**
 * createShowWelcome
 *
 */
function createShowWelcome() {
  const ss = SpreadsheetApp.getActive();
  ScriptApp.newTrigger('showWelcome')
    .forSpreadsheet(ss)
    .onOpen()
    .create();
}
