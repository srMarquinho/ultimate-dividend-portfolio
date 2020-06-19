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
function calcBoughtSold() {
  const [transactionsRange, dateColNumber, typeColNumber, sharesColNumber, totalColNumber, ...filterItems] = arguments;
  let range = filterData(transactionsRange, null, null, ...filterItems);
  range = orderRangeByCol(range, dateColNumber);

  let totalAcc = {
    'Bought': new Big(0),
    'Sold': new Big(0)
  };

  const sharesAcc = {
    'Bought': new Big(0),
    'Sold': new Big(0)
  };

  range.forEach((row, i) => {
    const type = row[typeColNumber - 1];
    const total = row[totalColNumber - 1];
    const shares = row[sharesColNumber - 1];

    if (!type || !total || !totalAcc[type]) {
      return;
    }

    if (sharesColNumber) {
      sharesAcc[type] = sharesAcc[type].plus(shares);
      const sharesResult = sharesAcc['Bought'].minus(sharesAcc['Sold']);
      if (!+sharesResult) {
        totalAcc = {
          'Bought': new Big(0),
          'Sold': new Big(0)
        };
        return;
      }
    }

    totalAcc[type] = totalAcc[type].plus(total);
  });

  const resultBig = totalAcc['Bought'].minus(totalAcc['Sold']);
  return +resultBig;
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
