<template>
  <div class="briefcases-deals">
    <base-table
      :row="tableRow"
      :headers="tableHeaders"
      show-actions
      @add="showPopupAsset = true"
      :loading="loading"
    />
    <popup-asset
      v-if="showPopupAsset"
      @close="showPopupAsset = false"
      @create="addAsset"
    />
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable";
import { mapActions, mapState } from "vuex";
import PopupAsset from "@/routs/briefcase/popupAsset";
export default {
  name: "BriefcasesDeals",
  components: { PopupAsset, BaseTable },
  props: {},
  data: () => ({
    showPopupAsset: false,
    tableHeaders: [
      {
        text: "Название",
        align: "start",
        value: "name",
      },
      { text: "Кол-во", value: "count" },
      { text: "Ср.цена", value: "middlePrice" },
      { text: "Тек.цена", value: "currentPrice" },
      { text: "Тек.стоимость", value: "cost" },
      { text: "Прибыль, %", value: "profit" },
      { text: "Доходность", value: "profitability" },
      { text: "Доля", value: "percent" },
    ],
  }),
  staticData: () => ({}),
  computed: {
    ...mapState({
      tableRow: (state) => state.assets.list,
      loading: (state) => state.assets.loading,
    }),
  },
  methods: {
    ...mapActions("assets", ["createAsset"]),
    addAsset(asset) {
      this.createAsset(asset);
    },
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
