<template>
  <div class="briefcases-deals">
    <base-table
      :row="tableRow"
      :headers="tableHeaders"
      show-actions
      @add="showPopupDeals = true"
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
import PopupDeal from "@/routs/briefcase/PopupDeal";
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
      { text: "дата", value: "date" },
      { text: "Кол-во", value: "count" },
      { text: "Цена", value: "price" },
      { text: "Сумма", value: "sum" },
    ],
  }),
  computed: {
    ...mapState({
      tableRow: (state) => state.deals.list,
      loading: (state) => state.deals.loading,
    }),
  },
  methods: {
    ...mapActions("deals", ["create"]),
    addDeal(asset) {
      this.create(asset);
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
