const calculateBill = (price, vat, tip) => {
  const amount = price + (price * vat) / 100 + tip;
  return `${amount}`;
  //   return amount.toString();
};

module.exports = calculateBill;

console.log(calculateBill(100, 2, 10));
