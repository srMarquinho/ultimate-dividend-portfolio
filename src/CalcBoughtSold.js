/**
 * calcBoughtSold
 *
 * @returns
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
