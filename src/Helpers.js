/**
 * sanitize
 *
 * @param {*} string
 * @returns
 */
function sanitize(string) {
  return string
    .replace('&amp;', '&');
}

/**
 * tryValue
 *
 * @param {*} value1
 * @param {*} value2
 * @returns
 */
function tryValue(value1, value2) {
  return !!value1 && !isError(value1) ? value1 : value2;
}

/**
 * isError
 *
 * @param {*} value
 * @returns
 */
function isError(value) {
  return ['#NULL!', '#DIV/0!', '#VALUE!', '#REF!', '#NAME?', '#NUM!', '#N/A', '#ERROR!'].includes(value);
}

/**
 * orderRangeByCol
 *
 * @param {*} range
 * @param {*} colNumber
 * @returns
 */
function orderRangeByCol(range, colNumber) {
  return range
    .filter(i => i[colNumber - 1])
    .sort((a, b) => {
      if (a[colNumber - 1] === b[colNumber - 1]) {
        return 0;
      }
      return a[0] < b[0] ? -1 : 1;
    });
}
