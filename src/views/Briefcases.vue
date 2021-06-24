<template>
  <div class="briefcases main_container">
    <tabs-menu
      background-color="blue-grey lighten-5"
      :height="36"
      :tabs="[
        { name: 'таблица', id: 1, path: 'main' },
        { name: 'графики', id: 2, path: 'main' },
      ]"
    />

    <div class="briefcases__content">
      <v-card class="briefcases__list">
        <v-list two-line>
          <v-list-item-group v-model="selected" active-class="teal--text">
            <template v-for="(item, index) in briefcasesItems">
              <v-list-item :key="item.title">
                <template v-slot:default="{ active }">
                  <briefcase :data="item" :active="active" />
                </template>
              </v-list-item>

              <v-divider
                v-if="index < briefcasesItems.length - 1"
                :key="index"
              />
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>

      <base-table class="briefcases__table" />
    </div>
  </div>
</template>

<script>
import Briefcase from "@/routs/briefcase/Briefcase";
import BaseTable from "@/components/BaseTable";
import TabsMenu from "@/components/TabsMenu";
export default {
  name: "Briefcases",
  components: { TabsMenu, BaseTable, Briefcase },
  props: {},
  data: () => ({
    selected: 0,
    briefcasesItems: [
      {
        id: 1,
        name: "Кошелечек 1",
        currency: "RUB",
        amount: 15000,
        profitability: 24,
        countPosition: 34,
      },
      {
        id: 2,
        name: "Кошелечек 2",
        currency: "USD",
        amount: 105000,
        profitability: 12,
        countPosition: 53,
      },
      {
        id: 3,
        name: "Кошелечек 3",
        currency: "RUB",
        amount: 155000,
        profitability: 75,
        countPosition: 12,
      },
      {
        id: 4,
        name: "Кошелечек 4",
        currency: "EUR",
        amount: 175000,
        profitability: 1,
        countPosition: 54,
      },
      {
        id: 5,
        name: "Кошелечек 5",
        currency: "RUB",
        amount: 125000,
        profitability: -56,
        countPosition: 324,
      },
      {
        id: 6,
        name: "Кошелечек 5",
        currency: "RUB",
        amount: 125000,
        profitability: -56,
        countPosition: 324,
      },
      {
        id: 7,
        name: "Кошелечек 5",
        currency: "RUB",
        amount: 125000,
        profitability: -56,
        countPosition: 324,
      },
      {
        id: 8,
        name: "Кошелечек 5",
        currency: "RUB",
        amount: 125000,
        profitability: -56,
        countPosition: 324,
      },
      {
        id: 9,
        name: "Кошелечек 5",
        currency: "RUB",
        amount: 125000,
        profitability: -56,
        countPosition: 324,
      },
      {
        id: 10,
        name: "Кошелечек 5",
        currency: "RUB",
        amount: 125000,
        profitability: -56,
        countPosition: 324,
      },
    ],
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.briefcases {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &.main_container {
    height: calc(100% - 64px - 36px);
  }
}
.briefcases__title {
  width: 100%;
}
.briefcases__content {
  display: flex;
  width: 100%;
  height: 100%;
}
.briefcases__list {
  flex-shrink: 1;
  overflow: auto;
  .v-list {
    padding: 0;
  }
}
</style>
