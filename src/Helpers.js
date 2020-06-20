/**
 *
 *
 */
function sanitize(string) {
  return string
    .replace('&amp;', '&');
}

/**
 *
 *
 */
function tryValue(value1, value2) {
  return !!value1 && !isError(value1) ? value1 : value2;
}

/**
 *
 *
 */
function isError(value) {
  return ['#NULL!', '#DIV/0!', '#VALUE!', '#REF!', '#NAME?', '#NUM!', '#N/A', '#ERROR!'].includes(value);
}

/**
 *
 *
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
