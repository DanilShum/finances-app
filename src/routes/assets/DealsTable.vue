<template>
  <div class="briefcases-deals">
    <base-table
      :row="deals"
      :headers="tableHeaders"
      show-actions
      editable
      @add="showPopupDeals = true"
      @remove="removeItemDeal"
      @clone="setDataTables({ deal: $event, assets })"
      :loading="loading"
    />
    <popup-deal
      v-if="showPopupDeals"
      @close="showPopupDeals = false"
      @create="setDataTables({ deal: $event, assets })"
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
      removeItemDeal: "deals/removeItem",
      setDataTables: "deals/setDataTables",
    }),
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
