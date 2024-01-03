const calculateBill = (price, vat, tip) => {
  const error = "error";

  if (
    typeof price !== "number" ||
    typeof vat !== "number" ||
    typeof tip !== "number"
  ) {
    return error;
  }

  const amount = price + (price * vat) / 100 + tip;
  return `£${amount}`;
  //   return "£" + amount.toString();
};

module.exports = calculateBill;

console.log(calculateBill(100, 2, 10));
