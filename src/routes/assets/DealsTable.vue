<template>
  <div class="briefcases-deals">
    <base-table
      :row="deals"
      :headers="tableHeaders"
      show-actions
      editable
      @add="showPopupDeals = true"
      @remove="removeItemDeal"
      :loading="loading"
    />
    <popup-deal
      v-if="showPopupDeals"
      @close="showPopupDeals = false"
      @create="addDeal"
    />
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable";
import { mapActions, mapState } from "vuex";
import PopupDeal from "@/routes/assets/PopupDeal";
import { db } from "@/main";
import firebase from "firebase/app";

export default {
  name: "BriefcasesDeals",
  components: { PopupDeal, BaseTable },
  props: {},
  data: () => ({
    showPopupDeals: false,
    tableHeaders: [
      {
        text: "Название",
        align: "start",
        value: "name",
      },
      { text: "Тикер", value: "ticker" },
      { text: "Операция", value: "operation" },
      { text: "Дата", value: "date" },
      { text: "Кол-во", value: "count" },
      { text: "Цена", value: "price" },
      { text: "Сумма", value: "sum" },
      {
        text: "",
        value: "actions",
        class: "base-table_action-cell",
        sortable: false,
      },
    ],
    assets: [],
    deals: [],
  }),
  computed: {
    ...mapState({
      loading: (state) => state.deals.loading,
    }),
  },
  methods: {
    ...mapActions({
      createDeal: "deals/create",
      createAsset: "assets/create",
      updateAsset: "assets/updateItem",
      removeItemDeal: "deals/removeItem",
    }),
    async addDeal(deal) {
      this.createDeal(deal);
      const assetIndex = this.assets.findIndex(
        (asset) => asset.ticker === deal.ticker
      );

      console.log(assetIndex);

      // TODO: move to store
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

      if (assetIndex < 0) {
        this.createAsset(payload);
      } else {
        const asset = this.assets[assetIndex];

        console.log(this.assets);
        console.log(asset);

        // TODO: _.mean
        const middlePrice = this.middlePrice(
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
        this.updateAsset(updatedAsset);
      }
    },
    middlePrice(val1, val2, count1, count2) {
      return (val1 * count1 + val2 * count2) / (count1 + count2);
    },
  },
  firestore() {
    return {
      deals:
        db
          .collection("deals")
          .where("userId", "==", firebase.auth().currentUser.uid) || [],
      assets:
        db
          .collection("assets")
          .where("userId", "==", firebase.auth().currentUser.uid) || [],
    };
  },
};
</script>

<style lang="scss">
.briefcases-deals {
  width: 100%;
  .base-table {
    height: 100%;
  }
}
</style>
