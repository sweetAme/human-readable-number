module.exports = function toReadable (number) {
  let singlesDict = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };

  let decDict = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  };

  let specialDict = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };

  if (number === 0) return 'zero';

  let stringNumber = String(number);
  let iteration = 0;
  let readable = '';

  while (stringNumber.length > iteration) {
    switch (iteration) {
      case 0:
        readable += singlesDict[stringNumber[stringNumber.length - 1]];
        iteration += 1;
        break;
      
      case 1:
        if (stringNumber[stringNumber.length - (iteration + 1)] <= 0) {
          iteration += 1;
          break;
        };
        if (stringNumber[stringNumber.length - (iteration + 1)] < 2) {
          readable = specialDict[stringNumber.slice(-2)];
        } else {
          readable = decDict[stringNumber[stringNumber.length - (iteration + 1)]] + ' ' + readable;
        }
        iteration += 1;
        break;

      case 2:
        readable = singlesDict[stringNumber[stringNumber.length - (iteration + 1)]] + ' hundred ' + readable;
        iteration += 1;
      default:
        break;
    }
  }

  return readable.trim();
}