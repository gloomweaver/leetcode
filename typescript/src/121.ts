function maxProfit(prices: number[]): number {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = -Number.MAX_VALUE;

  prices.forEach((price) => {
    if (price < minPrice) {
      minPrice = price;
    }
    if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  });

  return maxProfit;
}
