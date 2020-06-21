/**
 * filterData
 *
 * @returns
 */
function filterData() {
  let [range, fromDate, toDate, ...items] = arguments;
  const header = range.splice(0, 1);

  if (fromDate || toDate) {
    range = filterRowByDate(range, fromDate, toDate);
  }
  if (items && items.length) {
    items.filter(i => i).forEach(item => {
      range = filterRowByItem(range, item);
    });
  }
  return header.concat(range);
}

/**
 * filterRowByItem
 *
 * @param {*} range
 * @param {*} item
 * @returns
 */
function filterRowByItem(range, item) {
  return range.reduce((acc, row) => {
    if (row.includes(item)) {
      acc.push(row);
    }
    return acc;
  }, []);
}

/**
 * filterRowByDate
 *
 * @param {*} range
 * @param {*} fromDate
 * @param {*} toDate
 * @returns
 */
function filterRowByDate(range, fromDate, toDate) {
  return range.reduce((acc, row) => {

    if (!row[0]) {
      return acc;
    }
    const isAfterFrom = fromDate && row[0] >= fromDate;
    const isBeforeTo = toDate && row[0] <= toDate;

    if (isAfterFrom && isBeforeTo) {
      acc.push(row);
      return acc;
    }
    if (isAfterFrom && !toDate) {
      acc.push(row);
    }
    if (isBeforeTo && !fromDate) {
      acc.push(row);
    }
    return acc;
  }, []);
}
