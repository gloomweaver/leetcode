function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let idx = 1; idx < prices.length; idx++) {
    if (prices[idx] > prices[idx - 1]) {
      profit += prices[idx] - prices[idx - 1];
    }
  }
  return profit;
}
