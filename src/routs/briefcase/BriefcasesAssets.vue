<template>
  <div class="briefcases-assets">
    <base-table
      class="briefcases__table"
      disabled-pagination
      :row="tableRow || []"
      :headers="tableHeaders"
      :loading="loading"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseTable from "@/components/BaseTable";

export default {
  name: "BriefcasesAssets",
  components: { BaseTable },
  props: {},
  data: () => ({
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
  computed: {
    ...mapState({
      tableRow: (state) => state.assets.list,
      loading: (state) => state.assets.loading,
    }),
  },
};
</script>

<style lang="scss">
.briefcases-assets {
  overflow-y: auto;
  width: 100%;
}
</style>
