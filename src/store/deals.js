import { createStore } from "@/helpers/create-store";

export const calcMiddlePrice = (val1, val2, count1, count2) => {
  return (val1 * count1 + val2 * count2) / (count1 + count2);
};

export default createStore({
  entity: "deals",
  actions: {
    setDataTables({ dispatch }, { deal, assets }) {
      dispatch("create", deal);
      const asset = assets.find((asset) => asset.ticker === deal.ticker);

      const payload = {
        name: deal.name,
        count: Number(deal.count),
        middlePrice: Number(deal.price),
        currentPrice: 24,
        cost: Number(deal.count) * 24,
        profit: 1,
        profitability: 16,
        percent: 4,
        ticker: deal.ticker,
      };

      if (!asset) {
        dispatch("assets/create", payload, { root: true });
      } else {
        const middlePrice = calcMiddlePrice(
          payload.middlePrice,
          asset.middlePrice,
          payload.count,
          asset.count
        );

        const updatedAsset = {
          ...asset,
          name: payload.name,
          count: payload.count + asset.count,
          middlePrice,
          cost: (payload.count + asset.count) * 24,
          ticker: payload.ticker,
        };
        dispatch("assets/updateItem", updatedAsset, { root: true });
      }
    },
  },
});
