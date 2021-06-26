<template>
  <div class="briefcases main_container">
    <v-toolbar
      class="briefcases__toolbar"
      height="36"
      max-height="36"
      color=" blue-grey lighten-5"
    >
      <tabs-menu
        :height="36"
        :tabs="[
          { name: 'таблица', id: 1, path: 'main' },
          { name: 'графики', id: 2, path: 'main' },
        ]"
      />

      <v-btn icon small class="mr-2" @click="showDropparams = true">
        <v-icon>mdi-filter-menu-outline</v-icon>
      </v-btn>
      <v-btn icon small class="mr-2" @click="showDropparams = true">
        <v-icon>mdi-finance</v-icon>
      </v-btn>
      <v-btn icon small class="mr-0" @click="showDropparams = true">
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
    </v-toolbar>
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
      <base-table
        class="briefcases__table"
        disabled-pagination
        :row="tableRow"
        @add="addActive"
      />
    </div>
    <popup :overlay-transparent="false" v-model="showDropparams">
      <template #default>
        <v-row align="center" justify="space-around">
          <v-btn depressed> Normal </v-btn>
          <v-btn depressed color="primary"> Primary </v-btn>
          <v-btn depressed color="error"> Error </v-btn>
          <v-btn depressed disabled> Disabled </v-btn>
        </v-row>
        <v-container fluid>
          <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="items" label="Standard"></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="items" filled label="Filled style"></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="items"
                label="Outlined style"
                outlined
              ></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="items" label="Solo field" solo></v-select>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </popup>
  </div>
</template>

<script>
import Briefcase from "@/routs/briefcase/Briefcase";
import BaseTable from "@/components/BaseTable";
import TabsMenu from "@/components/TabsMenu";
import Popup from "@/components/Popup";
export default {
  name: "Briefcases",
  components: { Popup, TabsMenu, BaseTable, Briefcase },
  props: {},
  data: () => ({
    selected: 0,
    items: ["Foo", "Bar", "Fizz", "Buzz"],
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
    showDropparams: false,
    tableRow: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
      {
        name: "Frozen Yogurt2",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich2",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair2",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake2",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread2",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean2",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Lollipop2",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb2",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut2",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat2",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
    ],
  }),
  computed: {},
  methods: {
    addActive() {},
  },
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
.briefcases__toolbar {
  box-shadow: none !important;
}
.briefcases__content {
  display: flex;
  width: 100%;
  height: 100%;
}

.briefcases__list {
  flex-shrink: 2;
  overflow: auto;
  max-width: 200px !important;
  .v-list {
    padding: 0;
  }
}
</style>
