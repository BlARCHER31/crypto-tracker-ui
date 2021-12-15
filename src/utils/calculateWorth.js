module.exports = function calculateTotalWorth(amount, currentPrice) {
  let total = amount * currentPrice
  return (Math.round(100 * total) / 100).toLocaleString('en-US')
}
